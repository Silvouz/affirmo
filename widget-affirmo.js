// Affirmo : widget Scriptable (iPhone)
// 1. Remplace l'adresse ci-dessous par celle de ton site GitHub Pages (avec le / final).
// 2. Paramètre du widget : "fr" ou "en" (vide = français).
const SITE = "https://TON-PSEUDO.github.io/affirmo/";

const LANG = ((args.widgetParameter || "fr").trim().toLowerCase().startsWith("en")) ? "en" : "fr";
const fm = FileManager.local();
const cachePath = fm.joinPath(fm.documentsDirectory(), "affirmo-affirmations.json");

let data = null;
try {
  data = await new Request(SITE + "affirmations.json").loadJSON();
  fm.writeString(cachePath, JSON.stringify(data));
} catch (e) {
  if (fm.fileExists(cachePath)) data = JSON.parse(fm.readString(cachePath));
}

function dayNumber(d) {
  const a = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  const b = Date.UTC(2026, 8, 18); // même point de départ que l'app
  return Math.floor((a - b) / 86400000);
}
const list = data ? data[LANG] : [LANG === "en" ? "Open Affirmo for today's affirmation." : "Ouvre Affirmo pour ton affirmation du jour."];
// La nouvelle affirmation arrive à 5 h, comme dans l'app
const logicalNow = new Date(Date.now() - 5 * 3600000);
const text = list[((dayNumber(logicalNow) % list.length) + list.length) % list.length];

const w = new ListWidget();
w.url = SITE;
const family = config.widgetFamily || "medium";

if (family.startsWith("accessory")) {
  // Écran verrouillé
  const t = w.addText(text);
  t.font = Font.italicSystemFont(13);
  t.minimumScaleFactor = 0.6;
} else {
  const h = new Date().getHours();
  const palettes = h < 6 || h >= 21 ? ["#0D1433", "#3A2F66"]
    : h < 10 ? ["#4A5E9E", "#FFB07A"]
    : h < 18 ? ["#3A7FD4", "#9CC3E8"]
    : ["#2E3A78", "#F29A8E"];
  const g = new LinearGradient();
  g.colors = palettes.map(c => new Color(c));
  g.locations = [0, 1];
  w.backgroundGradient = g;
  w.setPadding(16, 16, 14, 16);
  const t = w.addText(text);
  t.font = new Font("Georgia-Italic", family === "small" ? 15 : family === "large" ? 24 : 19);
  t.textColor = Color.white();
  t.minimumScaleFactor = 0.5;
  w.addSpacer();
  const f = w.addText("Affirmo");
  f.font = Font.mediumSystemFont(10);
  f.textColor = new Color("#FFFFFF", 0.7);
}

const next = new Date();
if (next.getHours() >= 5) next.setDate(next.getDate() + 1);
next.setHours(5, 5, 0, 0);
w.refreshAfterDate = next;

if (config.runsInWidget) Script.setWidget(w);
else await w.presentMedium();
Script.complete();
