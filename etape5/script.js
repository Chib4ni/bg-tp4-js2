"use strict";

// Compteur du nombre de lignes, initialisé à 0 (let, slide ??)
let lignes = 0;

// Total des points, initialisé à 0 (let, slide ??)
let total_points = 0;

// Tableau d'objets "persons" (slide ??)
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

// doInsert met à jour les compteurs, insère la ligne et met à jour le résumé
function doInsert(nom, prenom, points) {
    // Rajouter points (passé en paramètre) à la variable total_points
    total_points += points;

    // Incrémenter lignes de 1, puis l'affecter à num
    lignes++;
    const num = lignes;

    doInsertRowTable(num, nom, prenom, points);

    // Appel de la fonction update_summary()
    update_summary();
}

// Met à jour l'espace résumé
function update_summary() {
    // Récupérer l'élément id = p1 (getElementById, slide ??)
    const element_lignes = document.getElementById("p1");

    // Récupérer l'élément id = p3
    const element_points = document.getElementById("p3");

    // Avec innerText, modifier le contenu pour afficher le nombre de lignes
    element_lignes.innerText = lignes + " ligne(s)";

    // Avec innerText, modifier le contenu pour afficher le total des points
    element_points.innerText = "Total point(s)= " + total_points;
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

// Fonction appelée au clic sur le bouton Ajouter du formulaire
function doNewData() {
    // Récupérer les éléments de saisie (getElementById, slide ??)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Accéder à l'attribut value de chaque champ (slide ??)
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    // parseInt convertit un texte en entier (slide ??)
    const points = parseInt(elt_points.value);

    // Saisie contrôlée : aucun champ ne doit être vide (if / else, slide ??)
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        // Méthode alert de window (BOM, slide ??)
        alert("Formulaire incomplet !");
    } else {
        // Appeler doInsert avec les nouvelles données
        doInsert(nom, prenom, points);

        // Insérer également les données dans le tableau persons (push, slide ??)
        persons.push({ nom: nom, prenom: prenom, points: points });

        // Remettre les champs à vide (attribut value)
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}
