
const hrHand = document.querySelector("#hour")

const secHand = document.querySelector("#second")
   
const minHand = document.querySelector("#minute")
    
function secondRotation() { 
    return (seconds / 60) *360
}   

function hourRotation() {
    return (hours / 12) *360
}

function minuteRotation() {
    return (minutes / 60 ) *360  
}

let degrees = 45;
tick = () => {
    const currentTime = new Date();
    const secondsHand = currentTime.getSeconds()/60 * 360 - 90;
    const minuteHand = (secondsHand + currentTime.getMinutes()) / 60 * 360 - 90;
    const hourHand = (minuteHand + currentTime.getHours()) / 12 * 360 - 90; 
    secHand.style.transform = `rotate(${secondsHand}deg)`;
    minHand.style.transform = `rotate(${minuteHand}deg)`;
    hrHand.style.transform = `rotate(${hourHand}deg)`;
    
    
    
}

setInterval (tick, 1000)
tick ()


