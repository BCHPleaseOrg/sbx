<template>
    <Header />

    <router-view />

    <Footer />
</template>

<script>
/* Import components. */
import Footer from '@/components/FooterMin'
import Header from '@/components/Header'

/* Set constants. */
const RETRY_DELAY = 500 // 0.5 seconds
const RETRY_ATTEMPTS = 5 // approx. 2.5 seconds

export default {
    components: {
        Footer,
        Header,
    },
    data: () => {
        return {
            //
        }
    },
    methods: {
        /**
         * Initialize Web3
         *
         * Attempt to connect to the "injected" Web3 provider.
         */
        initWeb3() {
            if (window.ethereum && window.ethereum.chainId) {
                /* Set chain id. */
                // FIXME: This is DEPRECATED
                // https://docs.metamask.io/guide/provider-migration.html#handling-eth-chainid-return-values
                const chainId = window.ethereum.chainId
                console.log('CHAIN ID', chainId)

                /* Handle chain id. */
                if (chainId) {
                    if (chainId === '0x2710') { // SmartBCH Mainnet
                        /* Request network update. */
                        this.$store.dispatch('setNetwork', 'mainnet')
                    } else if (chainId === '0x2711') { // SmartBCH Testnet
                        /* Request network update. */
                        this.$store.dispatch('setNetwork', 'testnet')
                    }
                } else {
                    throw new Error('Oops! No CHAIN ID is available from the Web3 provider.')
                }

                console.info('Web3 has been loaded and the blockchain is ready to use.')
            } else {
                console.error('Web3 provider could NOT be found. Re-trying in 3, 2, 1..')

                /* Validate retry attempts. */
                if (this.retries++ < RETRY_ATTEMPTS) {
                    /* Pause and try again. */
                    setTimeout(() => {
                        /* Initialize Web3. */
                        this.initWeb3()
                    }, RETRY_DELAY)
                } else {
                    /* Set to (Mainnet) default. */
                    this.$store.dispatch('setNetwork', 'mainnet')
                }
            }
        },

        closeModal() {
            //
        },

    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
