"use strict";

// Compteur du nombre de lignes insérées, initialisé à 0
// (Variable avec let : slide ??)
let lignes = 0;

// Au début, JavaScript crée le tableau "persons"
// (Tableau d'objets : slide ??)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Appel de init()
init();

// init() parcourt le tableau persons et appelle doInsert pour chaque objet
function init() {
    // Boucle for..of (slide ??)
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

// doInsert appelle doInsertRowTable avec les paramètres appropriés
function doInsert(nom, prenom, points) {
    // Incrémenter lignes de 1, puis l'affecter à num (opérateur ++, slide ??)
    lignes++;
    const num = lignes;

    doInsertRowTable(num, nom, prenom, points);
}

// Fonction qui affiche le contenu du tableau persons dans la console
function consoleTableau() {
    console.log(persons);
}

// Fonction qui insère une ligne dans le tableau (étape 2)
function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer l'élément tableau (querySelector, slide ??)
    const table = document.querySelector("table");

    // Créer un élément tr (createElement, slide ??)
    const row = document.createElement("tr");

    // Attribut class = "row" (setAttribute, slide ??)
    row.setAttribute("class", "row");

    // Créer 5 éléments td
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplissage du contenu (innerText, slide ??)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Dernière colonne : input de type checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // Affectation des classes (setAttribute, slide ??)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne (append, slide ??)
    row.append(col1, col2, col3, col4, col5);

    // Ajouter la ligne au tableau
    table.append(row);
}
