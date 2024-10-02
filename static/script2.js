document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var form = document.getElementById("signupForm");
    var formData = new FormData(form);
    var email = formData.get('email');

    var messageDiv = document.getElementById("message");

    // Controlla se l'email è vuota
    if (!email) {
        messageDiv.style.color = "red";
        messageDiv.textContent = "Per favore, inserisci un'email valida.";
        return;
    }

    fetch("/register", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            messageDiv.style.color = "green";
        } else {
            messageDiv.style.color = "red";
        }
        messageDiv.textContent = data.message;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
