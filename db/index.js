// const IPFS = import('ipfs-core')
// const IPFS = require('ipfs')
// const OrbitDB = require('orbit-db')

/**
 * Initialization
 */
const init = () => {
    console.log()
    console.log('Starting the SBX Federation database..')
    console.log('--------------------------------------------------')
    console.log()
}

/**
 * Main
 */
async function main () {
    /* Import modules. */
    const IPFS = await import('ipfs')
    // const OrbitDB = await import('orbit-db')
    const OrbitDB = require('orbit-db')
    // console.log('\nOrbitDB', OrbitDB);

    try {
        /* Create IPFS instance. */
        // TODO: Add ENV config option.
        const ipfsOptions = {
            repo: './ipfs',
        }
        const ipfs = await IPFS.create(ipfsOptions)
        // console.log('\nIPFS', ipfs);

        /* Request IPFS ID. */
        const ipfsid = await ipfs.id()

        const orbitOptions = {
            id: ipfsid.id.toString(),
            directory: './orbitdb',
        }

        /* Create OrbitDB instance. */
        const orbitdb = await OrbitDB.createInstance(ipfs, orbitOptions)
        // console.log('ORBITDB', orbitdb);

        console.info('\nIPFS & OrbitDB are now ready...')
    } catch (e) {
        console.log('ERROR', e)
    }
}

init()

main()

// require('./Orders')
