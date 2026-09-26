const image = document.querySelector(".img");
const btn = document.querySelector(".button");
const text = document.querySelector(".fred h1")

let i = 0;
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
    
})