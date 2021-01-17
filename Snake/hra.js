import { update as updateHad, draw as drawHad, RYCHLOST_HADA, hlavaHada, kolizeHada } from './had.js'
import { update as updateJidlo, draw as drawJidlo } from './jidlo.js'
import { zaPolem } from './grid.js'

let posledniRender = 0
let gameOver = false
const herniPlocha = document.getElementById('herniPlocha')

function main(currentTime) {
    if(gameOver) {
       if(confirm('Prohráli jste. Stiskněte OK a zkuste to znovu.')) {
           window.location = 'snake.html'
       }
       return
    }



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
 updateJidlo()
 smrt()
}

function draw() {
    herniPlocha.innerHTML = ''
    drawHad(herniPlocha)
    drawJidlo(herniPlocha)
}

function smrt() {
    gameOver = zaPolem(hlavaHada ()) || kolizeHada()
}