### Le langage HTML

1. HTML

HyperText Markup Language *Langage de balise hypertexte*

Un fichier `.html` est un fichier de texte (comme le markdown par exemple). On ouvre un fichier de 2 façons :
- le développeur => avec un éditeur de code (ex: VisualStudio Code)
- l'utilisateur => avec un navigateur (ex: Firefox)

Le plus souvent les balises HTML sont en couple (ouvrante/fermante) mais il existe aussi des balises **orpheline** :
- `<MaBalise></MaBalise>`
- `<MaBalise>`

La structure minimale d'une page web est :

```html
<!DOCTYPE html>
<html>
<head></head>
<body></body>
<html>
```

Le site de référence pour les langages du WEB est le site des développeurs de Mozilla.
[https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements)

Quelques balises à connaître :
- `<body></body>`   contient tout ce qui est visible sur la page
- `<head></head>`   contient ce qui n'est pas visible sur la page (ex `<title></title>`)
- `<hl></hl>`       permet de faire des titres sur la page
- `<p></p>`         permet de faire un paragraphe
- `<a></a>`         permet d'accrocher le curseur pour créer un lien
- `<br>`
- `<img src="">`    pour insérer une image
- `<ul></ul>`       pour réaliser une liste sans ordre 
- `<ol></ol>`       pour réaliser une liste ordonnée
- `<li></li>`       pour insérer des items dans une liste


Les balises ouvrantes peuvent contenir des attributs définis sur le site de référence ou l'attribut `class=""` :<br>
`<MaBalise attribut=""></MaBalise>`

------------------------------------
Pour donner le chemin relatif vers le fichier, on utilise :
- `./` pour chercher dans le dossier courant
- `../` pour chercher dans le dossier du dessus


2. LE CSS
Cascading Style Sheet *feuille de style en cascade*
[https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties)

Pour définir du style, il faut un selecteur (element HTML ou class), des accolades, une propriété, une valeur.

```css
selecteur{
    propriete:valeur;
}
```

On peut écrire le CSS :
- dans le fichier html entre les balises `<style></style>`
- dans un fichier dédier avec l'extension `.css` ; il faut ajouter une 
balise `<link rel="stylesheet" href="NomDuFichier"`

Il existe plus de 500 propriétés et encore davantage de valeur possible mais souvent, les valeurs sont :
- des couleurs (soit un nom, soit un code comme rgb(0-255,0-255,0-255,))
- des tailles : plusieurs unités sont possibles
    - `px` pour pixels 
    - `em` relatif à la taille de la police
    - `%` relatif à la taille du contenant 

Remarque : Quand le selecteur css est un élément HTML (par exemple `p`) alors les propiétés s'appliquent à tous les éléments du même type.

Pour différencier des éléments de même nature, on peut utiliser l'attribut `class` ou `id`. Dans ce cas, le sélecteur est le nom de la classe précédé d'un `.` ou le nom de l'identifiant précédé d'un `#` .


Remarque : le contenu d'un élément HTML suit le principe du modèle en boîte.
[https://www.w3schools.com/css/css_boxmodel.asp](https://www.w3schools.com/css/css_boxmodel.asp)

Trois propriétés importantes sont liés à ce modèle:
- `border` pour le style de la bordure
- `pading` pour l'espace interne
- `margin` pour la marge autour de la bordure 


Remarque: il existe des propriétés spécifiques au texte, en particulier :
- `text-align` pour justifier le texte
- `font` pour la police de caractères


Il existe deux balises HTML universelles qui permettent de grouper des éléments ou du texte :
-`<div></div>`
-`<span></span>`