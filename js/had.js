import { getInputDirection } from "./input.js"
export let RYCHLOST_HADA = 9

const teloHada= [{ x: 11, y:11 }]
let hardMode = document.getElementById("hard");
let newSegments = 0
let audio1 = new Audio('sound/hardmode.mp3');

export function update() {
    addSegments()
    const inputSmer = getInputDirection()
    for(let i = teloHada.length - 2; i >= 0; i--) {
        teloHada[i + 1] = { ...teloHada[i] }
    }
    teloHada[0].x += inputSmer.x
    teloHada[0].y += inputSmer.y
}

export function draw(herniPlocha){

teloHada.forEach(segment => {
    
const hadElement = document.createElement('div')
    hadElement.style.gridRowStart = segment.y
    hadElement.style.gridColumnStart = segment.x
    hadElement.classList.add('had')
    herniPlocha.appendChild(hadElement)
})

}

export function zvetseniHada(amount) {
    newSegments += amount
}

export function naHadovi(position, {ignoreHead = false} = {}) {
    return teloHada.some ((segment, index) => {
        if(ignoreHead && index === 0) return false
            return equalPositions(segment, position)
    })
}

export function kolizeHada() {
    return naHadovi(teloHada[0], { ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
 for(let i = 0; i < newSegments; i++) {
     teloHada.push ({ ...teloHada[teloHada.length - 1]})
    }

    newSegments = 0
}

export function hlavaHada() {
    return teloHada[0]
}

hardMode.addEventListener('change', function() { 
    if (this.checked) {
        if(confirm('Vážně chcete spustit Těžký režim?')) {
            confirm('Těžký režim je doporučen jen pro ty nejnáročnější hráče hry Snake. Opravdu si přejete pokračovat?')
        }
        audio1.play()
        audio1.volume = 0.4;
     RYCHLOST_HADA = 21;
     }
    else {
      RYCHLOST_HADA = 9;
      audio1.pause();
      audio1.currentTime = 0;
      }
    });
