const secim = "May 4 2025 20:00:00";
const milisecondsEl = document.getElementById("miliseconds") 
const miniText = document.getElementById("mini-text")

function countdown() {
    const secimtarihi = new Date(secim);
    const suankitarih = new Date(); 
    
    const totalSeconds = (secimtarihi - suankitarih);
    

    milisecondsEl.textContent = totalSeconds.toLocaleString();

    if (totalSeconds<1){
        milisecondsEl.innerHTML = "GELDİ BANNER GELDİ!!!"
        milisecondsEl.style.fontSize = "60px"
        miniText.textContent = ""
    }
}

setInterval(countdown)
