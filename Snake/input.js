let inputSmer = {x: 0, y: 0}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            inputSmer = { x:0, y: -1}
                break

        case 'ArrowDown':
            inputSmer = { x:0, y: 1}
                break

        case 'ArrowLeft':
            inputSmer = { x:-1, y: 0}
                break

        case 'ArrowRight':
            inputSmer = { x:1, y: 0}
                break
    }

})


export function getInputDirection() {
    return inputSmer
}