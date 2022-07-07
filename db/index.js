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
// async function main () {
//     /* Create IPFS instance. */
//     const ipfsOptions = { repo : './ipfs', }
//     const ipfs = await IPFS.create(ipfsOptions)
//
//     /* Create OrbitDB instance. */
//     const orbitdb = await OrbitDB.createInstance(ipfs)
// }

init()

// main()

require('./Orders')
