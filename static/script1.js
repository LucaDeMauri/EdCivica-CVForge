document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita il submit del form normale
    
    var formData = new FormData(this);
    
    fetch('/login', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/'; // Redirect in caso di successo
        } else {
            showError(data.message); // Mostra il messaggio di errore in caso di errore
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showError('Si è verificato un errore. Riprova più tardi.');
    });
});

function showError(message) {
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
