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
    console.log('\n  Starting test...')
    console.info('___________________________________________________________________________')

    let data
    let success

    const logOptions = {
        // Give write access to the creator of the database
        accessController: {
            write: [
                orbitDb.identity.id,
                // '042c07044e7ea51a489c02854db5e09f0191690dc59db0afd95328c9db614a2976e088cab7c86d7e48183191258fc59dc699653508ce25bf0369d67f33d5d77839'
            ],
        }
    }

    const testOptions = {
        // Give write access to the creator of the database
        accessController: {
            // write: ['*'] // enable write access to the public
            write: [
                orbitDb.identity.id,
                '042c07044e7ea51a489c02854db5e09f0191690dc59db0afd95328c9db614a2976e088cab7c86d7e48183191258fc59dc699653508ce25bf0369d67f33d5d77839',
                '04ad4d2a7812cac1f0e6331edf22cec1a74b9694de6ad222b7cead06f79ec44a95e14b002ee7a0f6f03921fcf2ff646724175d1d31de4876c99dcc582cde835b4c',
            ],
        }
    }

    /* Initialize Logs database. */
    const logsDb = await orbitDb.eventlog('logs', logOptions)
    // console.log('\nLOGS DB', logsDb)

    /* Initialize Test database. */
    // FOR DEVELOPMENT PURPOSES ONLY
    const testDb = await orbitDb.docs('test-db', testOptions)
    // console.log('\nTEST DB', testDb)

    testDb.events.on('replicated', () => {
        console.info('\n  Test Database has been replicated.')
        // const result = db2.iterator({ limit: -1 }).collect().map(e => e.payload.value)
        // console.log(result.join('\n'))
    })

    // where the hash is the `identity2.publicKey`
    // await db.access
    //     .grant(
    //         'write',
    //         '04ad4d2a7812cac1f0e6331edf22cec1a74b9694de6ad222b7cead06f79ec44a95e14b002ee7a0f6f03921fcf2ff646724175d1d31de4876c99dcc582cde835b4c'
    //     ) // grant access to database2

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
        }, {
            pin: true,
        })
        .catch(err => {
            console.error('\n  ↓ ↓ ↓ Oops! Something went wrong! ↓ ↓ ↓\n')
            console.error(err)
        })
        console.log('\nSUCCESS', success)
        // zdpuAyAgVuPWtN7SAhPF3n7jBj7JEnyN1ba2pN4yXFvAU5b6D
    }

    const _writeAgain = async () => {
        // test entry
        // FOR DEVELOPMENT PURPOSES ONLY
        success = await testDb.put({
            _id: 'test-nixin',
            name: 'test-again-doc-db',
            category: 'nixin'
        }, {
            pin: true,
        })
        .catch(err => {
            console.error('\n  ↓ ↓ ↓ Oops! Something went wrong! ↓ ↓ ↓\n')
            console.error(err)
        })
        console.log('\nSUCCESS', success)
        // zdpuAyAgVuPWtN7SAhPF3n7jBj7JEnyN1ba2pN4yXFvAU5b6D
    }

    const _get = async () => {
        data = testDb.get('')
        // data = testDb.all
        console.log('\nDATA', data.length, data)
    }

    const _query = async () => {
        data = testDb.query((doc) => doc.category === 'nil')
        console.log('\nQUERY', data.length, data)
    }

    /* Load database. */
    await testDb.load()

    // await _write()
    await _writeAgain()
    // await testDb.del('test')
    await _get()
    // await _query()

    console.info()
    console.info('___________________________________________________________________________')
    console.info('\n  Test completed successfully!\n')
}

/* Begin initialization. */
init()
