// Při této hře byly použity funkce import/export, jelikož jsem dokázal pochopil, jak to vše funguje

import { update as updateHad, draw as drawHad, RYCHLOST_HADA, hlavaHada, kolizeHada } from './had.js'
import { update as updateJidlo, draw as drawJidlo, score } from './jidlo.js'
import { zaPolem } from './grid.js'

let posledniRender = 0
let gameOver = false
const herniPlocha = document.getElementById('herniPlocha')
let whiteTheme = document.getElementById("theme");
let audio2 = new Audio('sound/game_over.mp3');


// Vyvolání funkce na prohrání hry.
function main(currentTime) {
    if(gameOver) {
        audio2.play()
        audio2.volume = 0.35;
       if(confirm('Prohráli jste. Stiskněte OK a zkuste to znovu. \nVaše skóre bylo: ' + score )) {
            window.location = 'index.html'
       }
       return
    }

// Render pozice hada 
    window.requestAnimationFrame(main)
    const sekundyOdPoslednihoRenderu = (currentTime - posledniRender) / 1000
    if (sekundyOdPoslednihoRenderu < 1 / RYCHLOST_HADA) return
    
    
    
    
    posledniRender = currentTime
    update()
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
// Funkce na prohrání hry. Pokud hlava hada dosáhne konce pole nebo narazí na svojí část těla, spustí se konec hry.
function smrt() {
    gameOver = zaPolem(hlavaHada ()) || kolizeHada()
}

// Světlé pozadí 
whiteTheme.addEventListener('change', function() { 
    if (this.checked) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("herniPlocha").style.backgroundColor = "white";
      document.getElementById("herniPlocha").style.color = "black";
      document.getElementById("herniPlocha").style.borderColor = "black";
      document.getElementById("hjedna").style.color = "black";
      document.getElementById("hjedna").style.borderColor = "black";
      document.getElementById("dif").style.color = "black";
      document.getElementById("hdva").style.color = "black";
      document.getElementById("hdva").style.borderColor = "black";
      document.getElementById("dif2").style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById("herniPlocha").style.backgroundColor = "black";
      document.getElementById("herniPlocha").style.color = "white";
      document.getElementById("herniPlocha").style.borderColor = "white";
      document.getElementById("hjedna").style.color = "white";
      document.getElementById("hjedna").style.borderColor = "white";
      document.getElementById("dif").style.color = "white";
      document.getElementById("hdva").style.color = "white";
      document.getElementById("hdva").style.borderColor = "white";
      document.getElementById("dif2").style.color = "white";
    }
  });
