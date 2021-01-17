let inputSmer = {x: 0, y: 0}
let posledniInputSmeru = { x:0, y:0 }


window.addEventListener('keydown', e => {
    
    switch (e.key) {
        
        case 'ArrowUp':
            if (posledniInputSmeru.y !== 0) 
            break
            inputSmer = { x:0, y: -1}
                break

        case 'ArrowDown':
            if (posledniInputSmeru.y !== 0) 
                break
            inputSmer = { x:0, y: 1}
                break

        case 'ArrowLeft':
            if (posledniInputSmeru.x !== 0) 
                break
            inputSmer = { x:-1, y: 0}
                break

        case 'ArrowRight':
            if (posledniInputSmeru.x !== 0) 
                break
            inputSmer = { x:1, y: 0}
                break
    }

})


export function getInputDirection() {
    posledniInputSmeru = inputSmer 
    return inputSmer
}