import { update as updateHad, draw as drawHad, RYCHLOST_HADA } from './had.js'


let posledniRender = 0
const hra = document.getElementById('hra')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const sekundyOdPoslednihoRenderu = (currentTime - posledniRender) / 1000
    if (sekundyOdPoslednihoRenderu < 1 / RYCHLOST_HADA) return
    
    
    
    
    posledniRender = currentTime
/**/
    update()
/**/
    draw()
}

window.requestAnimationFrame(main)

function update() {
 updateHad()
}

function draw() {
    hra.innerHTML = ''
    drawHad(hra)
}