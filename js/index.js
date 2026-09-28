const image = document.querySelector(".img");
const btn = document.querySelector(".button");
const text = document.querySelector(".fred h1");
const audio = document.querySelector("#jgf");
audio.volume = 0.1;
const srcAudio = audio.src; // on enregistre l'audio une variable
let audioTime = null; // variable du temps de l'audio

btn.addEventListener("pointerdown", () => {
    image.style.display = (image.style.display === "block") 
    ? "none"
    : "block";
    
    // si on appuye sur le bouton pour afficher le texte
    if (image.style.display === "none") {
        text.textContent = "Tu as eu peur ???";
        audio.pause(); // On coupe l'audio
        audio.src = ""; // On retire l'audio
        clearTimeout(audioTime); // pour effacer le temps qui tourne en fond
    }
    else {
        text.textContent = "";
        audio.src = srcAudio; // on recharge l'audio
        audio.currentTime = 0.15; // on reset le temps de l'audio (=remet à zéro)
        audio.play(); // on joue l'audio
        clearTimeout(audioTime); // pour effacer le temps qui tourne en fond
        // L'audio s'arrête au bout de 5 sec (il faut obligatoirement mettre en millisecondes)
        audioTime = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.src = "";
        },5000);
    }
    
})
