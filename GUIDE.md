# Affirmo : mise en ligne, widget et rituels automatiques

Ce dossier contient tout le site. Compte 20 à 30 minutes pour l'ensemble, dont 10 pour la mise en ligne.

## 1. Mettre Affirmo en ligne sur GitHub Pages (gratuit)

1. Crée un compte sur github.com si tu n'en as pas.
2. En haut à droite, « + » puis « New repository ». Nom : `affirmo`. Laisse-le en **Public**, puis « Create repository ».
3. Sur la page du dépôt, clique sur « uploading an existing file », glisse tous les fichiers de ce dossier (index.html, affirmations.json, manifest.webmanifest, sw.js, les trois images .png, widget-affirmo.js et ce guide), puis « Commit changes ».
4. Va dans « Settings », puis « Pages » dans la colonne de gauche. Dans « Build and deployment », choisis « Deploy from a branch », branche `main`, dossier `/ (root)`, puis « Save ».
5. Attends une à deux minutes et recharge la page : ton adresse s'affiche, du type `https://ton-pseudo.github.io/affirmo/`. Note-la, elle sert partout ensuite.

Pour mettre à jour plus tard, il suffit de réimporter le fichier modifié de la même façon.

## 2. Un choix important : comment tu ouvres Affirmo

Sur iPhone, une app « ajoutée à l'écran d'accueil » depuis Safari garde ses données (série, arbre, favoris) **séparément** de Safari. Or les automatisations et le widget ouvrent toujours Safari. Pour que ta série soit la même partout, fais tout passer par Safari :

1. Ouvre l'app **Raccourcis**, onglet « Raccourcis », « + ».
2. Ajoute l'action « Ouvrir les URL » et colle ton adresse GitHub Pages.
3. Renomme le raccourci « Affirmo », puis via le menu du raccourci « Ajouter à l'écran d'accueil ». Tu peux choisir comme image `apple-touch-icon.png` (enregistre-la d'abord dans Photos depuis ton site).

C'est cette icône que tu utiliseras au quotidien.

## 3. Le widget (écran d'accueil et écran verrouillé)

Un site web ne peut pas créer de widget lui-même, on passe donc par l'app gratuite **Scriptable** (App Store).

1. Installe Scriptable, ouvre-la, « + » pour créer un script.
2. Colle le contenu de `widget-affirmo.js` et remplace `https://TON-PSEUDO.github.io/affirmo/` par ton adresse (garde le `/` final). Renomme le script « Affirmo ». Touche ▶ pour vérifier qu'il affiche bien l'affirmation du jour.
3. Écran d'accueil : appui long sur un espace vide, « Modifier », « Ajouter un widget », Scriptable, taille moyenne. Puis appui long sur le widget, « Modifier le widget » : Script = Affirmo, « When Interacting » = Run Script, et Parameter = `fr` ou `en`.
4. Écran verrouillé : appui long sur l'écran verrouillé, « Personnaliser », zone des widgets, Scriptable (format rectangulaire), même réglage.

Toucher le widget ouvre Affirmo. Il affiche la même affirmation que l'app et change à 5 h du matin, comme l'app (iOS décide du moment exact de rafraîchissement, en général dans les minutes qui suivent).

## 4. Le matin : Affirmo s'ouvre quand tu coupes ton réveil

1. Raccourcis, onglet « Automatisation », « + » (ou « Nouvelle automatisation »).
2. Choisis le déclencheur « Alarme », puis « Est arrêtée ». Sélectionne ton réveil du matin (ou « N'importe laquelle »).
3. Choisis « Exécuter immédiatement » (et désactive « Me notifier lors de l'exécution »).
4. Action : « Ouvrir les URL » avec ton adresse. Termine.

Si tu utilises l'horaire de sommeil de l'app Santé plutôt qu'une alarme classique, le déclencheur s'appelle « Sommeil », option « Réveil ». Les intitulés peuvent varier légèrement selon ta version d'iOS.

## 5. Le soir : un mode Concentration « Affirmo »

L'idée : à partir d'une heure choisie, ton téléphone n'affiche plus qu'Affirmo et coupe les notifications, jusqu'au matin. La nouvelle affirmation n'arrivant qu'à 5 h, tu ne verras jamais celle du lendemain le soir.

1. Prépare d'abord une page d'écran d'accueil vide sur laquelle tu places seulement l'icône Affirmo et le widget.
2. Crée un groupe d'onglets Safari nommé « Affirmo » contenant uniquement ton adresse.
3. Réglages, « Concentration », « + », « Personnaliser ». Nomme-le « Affirmo ».
4. Notifications : n'autorise personne et aucune app (ou seulement tes contacts favoris).
5. « Personnaliser les écrans » : écran d'accueil = uniquement la page préparée à l'étape 1 ; écran verrouillé = celui avec le widget Affirmo.
6. « Filtres de concentration », « + », Safari : choisis le groupe d'onglets « Affirmo ». Safari n'affichera que lui pendant ce mode.
7. « Ajouter une planification » : par heure, par exemple de 22 h 00 à 8 h 00, tous les jours. Le mode s'active et se désactive ensuite tout seul chaque jour, sans rien toucher.
8. Urgences : les appels sortants et l'appel d'urgence (SOS) fonctionnent toujours. Pour les appels entrants, laisse activé « Autoriser les appels répétés » (une personne qui rappelle dans les 3 minutes passe), et ajoute tes proches dans « Personnes autorisées ». Pour un contact en particulier, sa fiche dans Contacts, « Modifier », « Sonnerie », « Contournement d'urgence » le fait sonner même en mode silencieux.

Option : si tu veux que le mode s'arrête dès ton réveil plutôt qu'à heure fixe, ajoute à l'automatisation du réveil (partie 4), avant « Ouvrir les URL », l'action « Définir le mode Concentration » réglée sur « Désactiver Affirmo ».

Pour aller plus loin, Réglages, « Temps d'écran », « Temps d'arrêt » sur la même plage horaire, en laissant Safari, Raccourcis et Téléphone dans « Toujours autorisé ». Tu pourras toujours passer outre, mais chaque tentative demandera un geste conscient.

## 6. La friction : Affirmo avant les réseaux sociaux, le matin

Ouvrir Instagram (ou TikTok, X, YouTube…) avant 10 h t'enverra d'abord sur Affirmo.

Crée d'abord le raccourci :

1. Raccourcis, « + », nomme-le « Affirmo d'abord ».
2. Actions, dans cet ordre : « Date actuelle » ; « Formater la date » (Format de date : Personnalisé, chaîne `H`, Format d'heure : Aucun) ; « Obtenir les nombres à partir de l'entrée » ; « Si » (le nombre) « est inférieur à » `10` ; dans le « Si », « Ouvrir les URL » avec ton adresse.

Puis l'automatisation :

1. Onglet « Automatisation », « + », déclencheur « App ».
2. Choisis les apps à freiner, coche « Est ouverte », « Exécuter immédiatement ».
3. Action : « Exécuter le raccourci », « Affirmo d'abord ».

Tu peux toujours revenir à l'app ensuite : le but n'est pas de t'enfermer, c'est de glisser dix secondes de respiration entre le réflexe et le scroll. Change le `10` si ton matin s'arrête à une autre heure.

## 7. Tester les ambiances

Ajoute ces paramètres à la fin de l'adresse pour prévisualiser : `?w=rain`, `?w=snow`, `?w=fog`, `?w=storm`, `?w=cloudy` ou `?w=clear` pour la météo, `?h=7.5` pour l'heure, `?d=2027-01-15` pour la date, `?g=30` pour l'arbre adulte, `?lang=en` pour l'anglais, `?anniv=1` pour voir le jour anniversaire (arc-en-ciel en journée, aurore boréale la nuit). Ils se combinent avec `&`, par exemple `?w=snow&h=9&d=2027-01-15`. Rien n'est enregistré quand tu utilises `g`.
