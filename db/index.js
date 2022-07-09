/* Initialize global handlers. */
let ipfs
let ipfsid
let orbitDb

/**
 * Initialization
 */
const init = () => {
    /* Initialize banners. */
    const banners = require('./banners')

    /* Show (intro) banner. */
    banners.simple() // Options are: simple, big

    /* Startup messages. */
    console.log('  Initializing new IPFS + OrbitDB instances.')
    console.log('  Please wait...')
    console.log('___________________________________________________________________________')
    console.log()

    main()
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
        ipfs = await IPFS.create(ipfsOptions)
        // console.log('\nIPFS', ipfs);

        /* Request IPFS ID. */
        ipfsid = await ipfs.id()

        console.info('___________________________________________________________________________')
        console.info()
        console.info('  IPFS is ready to go!')
        console.info('  ID -> ' + ipfsid.id.toString())

        const orbitOptions = {
            id: ipfsid.id.toString(),
            directory: './orbitdb',
        }

        /* Create OrbitDB instance. */
        orbitDb = await OrbitDB.createInstance(ipfs, orbitOptions)
        // console.log('ORBITDB', orbitDb);

        console.info('___________________________________________________________________________')
        console.info()
        console.info('  OrbitDB is ready to go!')
        console.info('  ID -> ' + '...') // TODO: Add ID.

        /* Initialize Orders class. */
        const Orders = require('./classes/Orders')

        /* Create a new Orders instance. */
        this.orders = new Orders(ipfs, orbitDb)
        // console.log('\nORDERS', this.orders)

        runTest()
    } catch (e) {
        console.log('ERROR', e)
    }
}

/**
 * Run Test
 */
const runTest = async () => {
    console.log('\n  Running test...\n')

    let data
    let success

    const logOptions = {
        // Give write access to the creator of the database
        accessController: {
            type: 'orbitdb', // OrbitDBAccessController
            write: ['*'] // enable write access to the public
        }
    }

    const testOptions = {
        // Give write access to the creator of the database
        accessController: {
            type: 'orbitdb', // OrbitDBAccessController
            write: [
                orbitDb.identity.id,
                '04ad4d2a7812cac1f0e6331edf22cec1a74b9694de6ad222b7cead06f79ec44a95e14b002ee7a0f6f03921fcf2ff646724175d1d31de4876c99dcc582cde835b4c'
            ],
        }
    }

    /* Initialize Logs database. */
    // const logsDb = await orbitDb.eventlog('logs', logOptions)
    const logsDb = await orbitDb.eventlog('logs')
    // console.log('\nLOGS DB', logsDb)

    /* Initialize Test database. */
    // FOR DEVELOPMENT PURPOSES ONLY
    // const testDb = await orbitDb.docs('test-db', testOptions)
    const testDb = await orbitDb.docs('test-db')
    // console.log('\nTEST DB', testDb)

    // where the hash is the `identity2.publicKey`
    // await db.access
    //     .grant(
    //         'write',
    //         '04ad4d2a7812cac1f0e6331edf22cec1a74b9694de6ad222b7cead06f79ec44a95e14b002ee7a0f6f03921fcf2ff646724175d1d31de4876c99dcc582cde835b4c'
    //     ) // grant access to database2

    console.info('___________________________________________________________________________')
    console.info()
    console.info(`  All databases are ready to go!`)
    // console.info('  ID -> ' + db.id)
    console.info('  Address (logs)    -> ' + logsDb.address.toString())
    console.info('  Address (test-db) -> ' + testDb.address.toString())

    const _write = async () => {
        // test entry
        // FOR DEVELOPMENT PURPOSES ONLY
        success = await testDb.put({
            _id: 'test',
            name: 'test-doc-db',
            category: 'distributed'
        })
        .catch(err => {
            console.error('Oops! Something went wrong.')
            console.error(err)
        })
        console.log('\nSUCCESS', success)
        // zdpuAyAgVuPWtN7SAhPF3n7jBj7JEnyN1ba2pN4yXFvAU5b6D
    }

    const _writeAgain = async () => {
        // test entry
        // FOR DEVELOPMENT PURPOSES ONLY
        success = await testDb.put({
            _id: 'test-again',
            name: 'test-again-doc-db',
            category: 'distributed'
        })
        .catch(err => {
            console.error('Oops! Something went wrong.')
            console.error(err)
        })
        console.log('\nSUCCESS', success)
        // zdpuAyAgVuPWtN7SAhPF3n7jBj7JEnyN1ba2pN4yXFvAU5b6D
    }

    const _get = async () => {
        /* Load database. */
        await testDb.load()

        data = testDb.get('') // NOTE: This gets all the entries in the database store.
        console.log('\nDATA', data.length, data)
    }

    /* Load database. */
    await testDb.load()

    await _write()
    // await _writeAgain()
    await _get()

    console.info('\n  Test completed!\n')
}

/* Begin initialization. */
init()
