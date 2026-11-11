"use strict";

// Fonction qui insère une ligne dans le tableau
// (Fonction avec paramètres : slide ?? du cours)
function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer l'élément tableau (DOM : querySelector, slide ??)
    const table = document.querySelector("table");

    // Créer un élément de type tr (ligne de tableau) (createElement, slide ??)
    const row = document.createElement("tr");

    // Affecter à row la valeur "row" à son attribut "class" (setAttribute, slide ??)
    row.setAttribute("class", "row");

    // Créer 5 éléments de type td (colonnes du tableau)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // REMPLISSAGE DU CONTENU (innerText, slide ??)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // La dernière colonne contient un input de type checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // AFFECTATION DES CLASSES (setAttribute, slide ??)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Rajouter les colonnes à la ligne row avec la méthode append() (slide ??)
    row.append(col1, col2, col3, col4, col5);

    // Rajouter la ligne row au tableau table (slide ??)
    table.append(row);
}
