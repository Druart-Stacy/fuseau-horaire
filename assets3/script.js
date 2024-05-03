// À l'aide des horodateurs, trouvez l'heure et la date exactes auxquelles nous nous trouverons dans 80000 heures.

// Écrire une fonction permettant d'afficher l'heure et la date pour n'importe quel nombre d'heures dans le futur.

// Créez une entrée numérique pour les heures et écoutez les événements 
// keyup pour afficher dynamiquement la date dans le nombre d'heures indiqué par l'entrée.
// Création des éléments HTML
const body = document.createElement("body");
const heure = document.createElement("p");

// Ajout du paragraphe dans le corps du document
body.appendChild(heure);

// Définition de la fonction pour calculer l'heure dans le futur
function heureStat(heursAct, nbrHeures) {
    const maintenant = new Date(); // Obtention de la date et l'heure actuelles
    const heureDansLeFutur = new Date(maintenant.getTime() + nbrHeures * 3600 * 1000); // Ajout du nombre d'heures pour obtenir l'heure dans le futur

    // Affichage de l'heure dans le futur
    heure.innerText = "Dans " + nbrHeures + " heures, il sera " + heureDansLeFutur.toLocaleTimeString();
}

// Exemple d'utilisation de la fonction
const heuresActuelles = new Date(); // Obtention de l'heure actuelle
const nombreHeures = 80000; // Nombre d'heures dans le futur

heureStat(heuresActuelles, nombreHeures); // Appel de la fonction pour afficher l'heure dans le futur

// Ajout du corps du document dans le document HTML
document.body.appendChild(body);
