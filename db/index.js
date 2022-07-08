// const IPFS = import('ipfs-core')
// const IPFS = require('ipfs')
// const OrbitDB = require('orbit-db')

const banner1 = () => {
    console.log(`
  Smart Bitcoin Exchange
  Federation Database

  ███████╗██████╗ ██╗  ██╗    ██████╗ ██████╗
  ██╔════╝██╔══██╗╚██╗██╔╝    ██╔══██╗██╔══██╗
  ███████╗██████╔╝ ╚███╔╝     ██║  ██║██████╔╝
  ╚════██║██╔══██╗ ██╔██╗     ██║  ██║██╔══██╗
  ███████║██████╔╝██╔╝ ██╗    ██████╔╝██████╔╝
  ╚══════╝╚═════╝ ╚═╝  ╚═╝    ╚═════╝ ╚═════╝
                                    v${require('./package.json').version}
    `)
}

const banner2 = () => {
    console.log(`
  Smart Bitcoin Exchange
  Federation Database

     d888888o.   8 888888888o \`8.\`8888.      ,8'        8 888888888o.      8 888888888o
   .\`8888:' \`88. 8 8888    \`88.\`8.\`8888.    ,8'         8 8888    \`^888.   8 8888    \`88.
   8.\`8888.   Y8 8 8888     \`88 \`8.\`8888.  ,8'          8 8888        \`88. 8 8888     \`88
   \`8.\`8888.     8 8888     ,88  \`8.\`8888.,8'           8 8888         \`88 8 8888     ,88
    \`8.\`8888.    8 8888.   ,88'   \`8.\`88888'            8 8888          88 8 8888.   ,88'
     \`8.\`8888.   8 8888888888     .88.\`8888.            8 8888          88 8 8888888888
      \`8.\`8888.  8 8888    \`88.  .8'\`8.\`8888.           8 8888         ,88 8 8888    \`88.
  8b   \`8.\`8888. 8 8888      88 .8'  \`8.\`8888.          8 8888        ,88' 8 8888      88
  \`8b.  ;8.\`8888 8 8888    ,88'.8'    \`8.\`8888.         8 8888    ,o88P'   8 8888    ,88'
   \`Y8888P ,88P' 8 888888888P .8'      \`8.\`8888.        8 888888888P'      8 888888888P
                                                                      v${require('./package.json').version}
    `)
}

/**
 * Initialization
 */
const init = () => {
    /* Spacer. */
    console.log()

    /* Show (intro) banner. */
    banner1()

    /* Startup messages. */
    console.log('  Initializing new IPFS + OrbitDB instances.')
    console.log('  Please wait...')
    console.log('___________________________________________________________________________')
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

        console.log('___________________________________________________________________________')
        console.log()
        console.info('  IPFS is ready to go!')
        console.info('  ID -> ' + ipfsid.id.toString())

        const orbitOptions = {
            id: ipfsid.id.toString(),
            directory: './orbitdb',
        }

        /* Create OrbitDB instance. */
        const orbitdb = await OrbitDB.createInstance(ipfs, orbitOptions)
        // console.log('ORBITDB', orbitdb);

        console.log('___________________________________________________________________________')
        console.log()
        console.info('  OrbitDB is ready to go!')
        console.log('  ID -> ' + '...') // TODO: Add ID.
    } catch (e) {
        console.log('ERROR', e)
    }
}

init()

main()

// require('./Orders')
