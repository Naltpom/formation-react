Créer un composant CarItem

props:
* product
 - price
 - name

state:
* quantity (init à 1)

html:
* afficher le nom du produit
* afficher la quantity
* btn pour augmenter la quentité + 1
* btn pour diminuer la quentité - 1
* afficher le total


Créer un composant Title et l'afficher dans le composant App

props: 
* title

effect:
* modifier le titre de la page (head) => document.title = ...

html:
* afficher le titre de la page dans un h1