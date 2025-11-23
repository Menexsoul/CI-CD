🚀 Exercice CI/CD avec GitHub Actions

🎯 Objectif

Ce projet a été créé dans le cadre d’un exercice pour découvrir et comprendre le CI/CD (Continuous Integration / Continuous Delivery) à l’aide de GitHub Actions.

L’objectif est de montrer comment automatiser l’exécution de tests à chaque changement sur le dépôt (push ou pull request), afin d’éviter de casser le projet et de travailler plus efficacement en équipe.

⸻

📁 Contenu du projet

.
├── index.js                # Petite fonction de test
├── test.js                 # Test automatisé
├── package.json            # Config Node + script de test
└── .github/
    └── workflows/
        └── ci.yml          # Workflow GitHub Actions (pipeline CI)


⸻

⚙ Fonctionnement

À chaque fois que quelqu’un fait un push ou un pull request, GitHub Actions exécute automatiquement des étapes définies dans le fichier ci.yml :
	1.	Récupération du code
	2.	Installation de Node.js
	3.	Installation des dépendances
	4.	Exécution des tests

Si le test passe ✔, le pipeline devient vert (= succès)
Si le test échoue ❌, le pipeline devient rouge (= erreur détectée)

⸻

🧪 Test contenu dans ce projet

const result = addition(2, 3);

Si le résultat est bien 5, le test réussit.

Essayez de changer la valeur (ex : mettre 10 et 4) pour faire échouer le pipeline volontairement et constater l’intérêt du CI.

⸻

▶ Comment utiliser ce projet

⿡ Installer le projet

npm install

⿢ Lancer le test manuellement

npm test

⿣ Envoyer sur GitHub

git init
git add .
git commit -m "Mise en place du CI/CD"
git branch -M main
git remote add origin https://github.com/<TON_COMPTE>/<TON_REPO>.git
git push -u origin main

Ensuite allez dans l’onglet Actions sur GitHub et observez le pipeline.
