const VELIKOST_POLE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * VELIKOST_POLE) +1,
        y: Math.floor(Math.random() * VELIKOST_POLE) +1
    }
}

export function zaPolem(position) {
    return (
        position.x < 1 || position.x > VELIKOST_POLE || 
        position.y < 1 || position.y > VELIKOST_POLE 
    )
}