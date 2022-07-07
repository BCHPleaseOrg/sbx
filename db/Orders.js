
/**
 * Orders Class
 */
class Orders {
    constructor (_ipfs, _orbitDb) {
        this.ipfs = _ipfs
        this.orbitDb = _orbitDb
    }
}

let ipfs
let orbitDb
let orders

/**
 * Initialization
 */
const init = async () => {
    /* Import modules. */
    ipfs = await import('ipfs')
    orbitDb = await import('orbit-db')

    try {
        orders = new Orders(ipfs, orbitDb)

        console.log('ORDERS', orders)
    } catch (e) {
        console.log('ERROR', e)
    }
}

init()
