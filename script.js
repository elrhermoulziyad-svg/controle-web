const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if(nom === "" || email === "" || password === "") {
        alert("Veuillez remplir tous les champs");
    } else {
        alert(
            "Nom : " + nom +
            "\nEmail : " + email +
            "\nMot de passe : " + password
        );
    }
});