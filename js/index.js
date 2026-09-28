const image = document.querySelector(".img");
const btn = document.querySelector(".button");
const text = document.querySelector(".fred h1");
const audio = document.querySelector("#jgf");
audio.volume = 0.1;

let audioTime = null; // variable du temps de l'audio
btn.addEventListener("pointerdown", () => {
    image.style.display = (image.style.display === "block") 
    ? "none"
    : "block";
    
    if (image.style.display === "none") {
        text.textContent = "Tu as eu peur ???";
    }
    else {
        text.textContent = "";
    }

    
    // si le son est coupé
    if (audio.paused)
    {
        audio.currentTime = 0; // on reset le temps de l'audio (=remet à zéro)
        audio.play(); // on joue l'audio
    clearTimeout(audioTime); // on reset la variable du temps de l'audio
    // L'audio s'arrête au bout de 5 sec
    audioTime = setTimeout(() => {
        audio.pause();
    },5000);
    }
    // sinon le son est toujours là
    else 
    {
        audio.pause(); // On coupe l'audio
        clearTimeout(audioTime); // on reset la variable du temps de l'audio
    
    }
    console.log(audioTime);
})
