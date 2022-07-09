/**
 * Orders Class
 */
class Orders {
    /* Constructor. */
    constructor (_ipfs, _orbitDb) {
        /* Initialzie IPFS instance holder. */
        this.ipfs = _ipfs

        /* Initialzie OrbitDB instance holder. */
        this.orbitDb = _orbitDb

        /* Initialize orders. */
        this.orders = []
    }

    /**
     * Get Order
     *
     * Retrieves an order from the database.
     */
    getOrder(_orderid) {
        // TODO
    }

    /**
     * Add Order
     *
     * Adds a new order to the database.
     */
    addOrder() {
        // TODO
    }
}

/* Export module. */
module.exports = Orders
