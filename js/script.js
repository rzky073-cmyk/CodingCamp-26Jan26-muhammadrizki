welcomeMessage ();

function welcomeMessage() {
    const userRespons = prompt("Welcome to Rizki Company! what is your name ?");

    if (userRespons === null || userRespons.trim() === "") {
        alert("Hello, Guest! Feel free to explore our website.");
    }else

    document.getElementById("welcome-speech").innerText = `Hello, ${userRespons}! Welcome to Rizki Company.` ;
}