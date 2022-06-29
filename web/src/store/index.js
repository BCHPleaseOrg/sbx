import { createStore } from 'vuex'

export default createStore({
    state: {
        /* Initialize network. */
        // NOTE: Current available options are `mainnet` and `testnet`.
        network: null,

        /* Set constants. */
        ONE_BITCOIN: 100000000,

        notif: {
            isShowing: false,
            icon: null,
            title: null,
            description: null,
            delay: 7000,
        },

    },
    getters: {
        getProvider(_state) {
            /* Validate network. */
            if (_state.network === 'mainnet') {
                return 'https://smartbch.devops.cash/mainnet'
            } else if (_state.network === 'testnet') {
                return 'https://smartbch.devops.cash/testnet'
            }

            return null
        },

        getShuffleCashAbi() {
            return require('../../../abis/ShuffleCash.json')
        },

        getShuffleCashAddr(_state) {
            /* Validate network. */
            if (_state.network === 'mainnet') {
                return '0x0'
            } else if (_state.network === 'testnet') {
                return '0x0'
            }

            return null
        },

    },
    actions: {
        /* Set network. */
        setNetwork({ commit }, _network) {
            commit('setNetwork', _network)
        },

        /* Show notification. */
        showNotif({ state, commit }, _pkg) {
            console.log('SHOW NOTIF', _pkg);

            /* Enable showing flag. */
            _pkg.isShowing = true

            /* Set new master (private) key. */
            commit('setNotif', _pkg)

            /* Set timeout to close/reset. */
            setTimeout(() => {
                /* Commit notification. */
                commit('setNotif', {
                    isShowing: false,
                    icon: null,
                    title: null,
                    message: null,
                })
            }, state.notif.delay)
        },

    },
    mutations: {
        /* Set network. */
        setNetwork(_state, _network) {
            _state.network = _network
        },

        /* Set notification. */
        setNotif(_state, _pkg) {
            // console.log('ACTIONS (pkg):', _pkg);

            /* Set showing flag. */
            const isShowing = _pkg.isShowing

            /* Set icon. */
            const icon = _pkg.icon

            /* Set title. */
            const title = _pkg.title

            /* Set message. */
            const message = _pkg.message

            /* Retrieve delay. */
            const delay = _state.notif.delay

            /* Set notification. */
            _state.notif = {
                isShowing,
                icon,
                title,
                message,
                delay,
            }
        }
    },
    modules: {
        //
    },
})
