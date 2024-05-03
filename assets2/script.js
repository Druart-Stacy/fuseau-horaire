// À l'aide de l'horeloge-age, déterminez le nombre de jours écoulés depuis votre date de naissance. Vous vous sentez déjà vieux ?
// Écrivez une fonction pour trouver le nombre de jours écoulés depuis n'importe quelle date (après 1970).

function calculerAge(dateNaissance) {
    const maintenant = new Date(); // Obtenir la date et l'heure actuelles
    const naissance = new Date(dateNaissance); // Convertir la date de naissance en objet Date

    let age = maintenant.getFullYear() - naissance.getFullYear(); // Calculer l'âge en soustrayant les années

    // Vérifier si l'anniversaire est déjà passé cette année
    const JourActuel = maintenant.getMonth();
    const jourNaissance = naissance.getDate(); // Correction de 'joursNaissance' en 'jourNaissance'

    if (JourActuel < naissance.getMonth() || (JourActuel === naissance.getMonth() && maintenant.getDate() < jourNaissance)) { // Correction de 'joursNaissance' en 'jourNaissance'
        age--;
    }

    return age; // Retourner l'âge calculé
}

// Exemple d'utilisation
const dateDeNaissance = "1993-02-10";
const age = calculerAge(dateDeNaissance);
console.log(age);

// Création des éléments HTML et ajout au corps du document
const body = document.body;
const p = document.createElement("p");
const dateNaissanceElement = document.createElement("p");

p.innerText = "Mon âge est: " + age; // Affichage de l'âge dans un paragraphe
dateNaissanceElement.innerText = "Date de naissance: " + dateDeNaissance; // Affichage de la date de naissance dans un paragraphe

body.appendChild(p);
body.appendChild(dateNaissanceElement);

// Ajout d'un paragraphe pour afficher un message (peut être remplacé par un message approprié)
const UsaParagraph = document.createElement("p"); 
UsaParagraph.innerText = "Bonjour du paragraphe USA";
body.appendChild(UsaParagraph);


// // Exemple d'utilisation
// const dateDeNaissance = '1990-05-25'; // Format YYYY-MM-DD
// const age = calculerAge(dateDeNaissance);
// console.log(age); // Affichera l'âge calculé