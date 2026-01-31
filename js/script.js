welcomeMessage ();

function welcomeMessage() {
    const userRespons = prompt("Welcome to My Website! what is your name ?");

    const el = document.getElementById("welcome-speech");
    if (userRespons === null || userRespons.trim() === "") {
        el.innerText = "Hello, Guest! Feel Free to Explore My Website.";
    }else{

    el.innerText = `Hello, ${userRespons}! Welcome to My Website.` ;
    }
}