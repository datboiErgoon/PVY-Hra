import { randomGridPosition } from './grid.js'

import { naHadovi, zvetseniHada } from './had.js'

let jidlo = randomPoziceJidla()
export let EXPANSION_RATE = 2

export function update() {
    if(naHadovi(jidlo)) {
        zvetseniHada(EXPANSION_RATE)
        jidlo = randomPoziceJidla()
    }
}

export function draw(herniPlocha){
    const jidloElement = document.createElement('div')
    jidloElement.style.gridRowStart = jidlo.y
    jidloElement.style.gridColumnStart = jidlo.x
    jidloElement.classList.add('jidlo')
    herniPlocha.appendChild(jidloElement)
}

function randomPoziceJidla() {
    let novaPoziceJidla 
    while (novaPoziceJidla == null || naHadovi(novaPoziceJidla)) {
        novaPoziceJidla = randomGridPosition()
    }
    return novaPoziceJidla
}