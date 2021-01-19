import { randomGridPosition } from './grid.js'

import { naHadovi, zvetseniHada } from './had.js'

let jidlo = randomPoziceJidla()
export let EXPANSION_RATE = 2
let audio3 = new Audio('sound/food.mp3');

// Funkce, která poté, co had projede přes jídlo, zvětší se velikost hada (EXPANSION_RATE) a jídlu dává random pozici
export function update() {
    if(naHadovi(jidlo)) {
        audio3.play()
        audio3.volume = 0.5;
        zvetseniHada(EXPANSION_RATE)
        jidlo = randomPoziceJidla()
    }
}
// Funkce, která vykreslí jídlo na herní plochu
export function draw(herniPlocha){
    const jidloElement = document.createElement('div')
    jidloElement.style.gridRowStart = jidlo.y
    jidloElement.style.gridColumnStart = jidlo.x
    jidloElement.classList.add('jidlo')
    herniPlocha.appendChild(jidloElement)
}

// Funkce, která dá jídlu náhodnou pozici
function randomPoziceJidla() {
    let novaPoziceJidla 
    while (novaPoziceJidla == null || naHadovi(novaPoziceJidla)) {
        novaPoziceJidla = randomGridPosition()
    }
    return novaPoziceJidla
}