import { getInputDirection } from "./input.js"

export const RYCHLOST_HADA = 7
const teloHada= [{ x: 11, y:11 }]

let newSegments = 0

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