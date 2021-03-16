# Comprendre

Essayez de synthétiser en binôme votre compréhension de la notion que vous avez vue (s'il s'agissait de plusieurs notions, vous pouvez répéter ce paragraphe plusieurs fois) : 
1. Quel est son rôle ?
Tester toutes les réponses possibles du code et simuler les réponses possibles de l'utilisateur

2. Quel est son intérêt ?

Il permet de voir précisément où se trouvent les erreurs

3. A-t-elle des désavantages ?

Se focalise trop sur les tests pour écrire son code et moins sur l'application

Code test est beaucoup plus lourd que le code d'origine

4. Y a-t-il plusieurs façons de s'en servir ?

-test unitaire

-test d'intégration 

-end to end // test de parcours-validation

5. Quelles sont les étapes importantes pour la mettre en place ?

créer un dossier ou fichier test

importer le module (test runner)

méthode assert()

*Test Unitaire* : 

- Organiser. C’est la première étape des tests unitaires. Cette étape **définit les exigences** auxquelles le code doit satisfaire.
- Agir. C’est l’étape intermédiaire des tests : le moment où le test est **effectué**, donnant les résultats que vous aurez à analyser par la suite.
- Affirmer. Dans cette dernière étape, les résultats devront être vérifiés pour voir s’ils sont conformes aux attentes. **Si c’est le cas, il est validé et vous pouvez continuer.** Dans le cas contraire, les erreurs éventuelles devront être corrigées jusqu’à ce qu’elles cessent d’apparaître.

*TDD* : 

5 étapes distinctes:

1. Écrire un test,
2. Vérifier qu’il échoue,
3. Écrire le code **suffisant** pour que le test passe,
4. Vérifier que le test passe, (le rendre fonctionnel)
5. Optimiser le code et vérifier qu’il n’y ait pas de régression. (remanier/refactor)

6. Quelles sont les nuances d'un langage à l'autre ?

Python : définir une classe avec les cas de test puis fonctions test pour chacun 

JS : installation du framework de test, Jest

7. Existe-t-il des contextes (langages, environnements, outils) où elle n'existe pas ?

8. Quelles sont ses alternatives ?

    Faire des tests manuels (plus long et moins précis)
