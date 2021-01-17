import { getInputDirection } from "./input.js"

export const RYCHLOST_HADA = 6
const teloHada= [{ x: 11, y:11 }]


export function update() {
    const inputSmer = getInputDirection()
    for(let i = teloHada.length - 2; i >= 0; i--) {
        teloHada[i + 1] = { ...teloHada[i] }
    }


    teloHada[0].x += inputSmer.x
    teloHada[0].y += inputSmer.y
}

export function draw(hra){

teloHada.forEach(segment => {
    
        const hadElement = document.createElement('div')
    hadElement.style.gridRowStart = segment.y
    hadElement.style.gridColumnStart = segment.x
    hadElement.classList.add('snake')
    hra.appendChild(hadElement)
})

}