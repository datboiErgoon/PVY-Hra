let = posledniRender = 0
const RYCHLOST_HADA = 1

function main(currentTime) {
    const sekundyOdPoslednihoRenderu = (currentTime - posledniRender) / 1000
    window.requestAnimationFrame(main)
    console.log(sekundyOdPoslednihoRenderu)
    posledniRender = currentTime
}

window.requestAnimationFrame(main)