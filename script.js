const form = document.getElementById("monFormulaire");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupérer les valeurs
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Créer un objet
    const utilisateur = {
        nom: nom,
        email: email,
        password: password
    };

    // Enregistrer dans localStorage
    localStorage.setItem("utilisateur", JSON.stringify(utilisateur));

    alert("Informations enregistrées dans Local Storage !");
});