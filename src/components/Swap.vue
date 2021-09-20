<template>
    <main class="w-screen">
        <div class="bg-gray-600 text-center py-10">
            <!-- <h1 class="text-4xl font-extrabold my-3 text-gray-200">
                PAWNBROKER DOLLARS (PWND)
            </h1>
            <h1 class="text-4xl font-extrabold mb-10 text-gray-200">
                INSTANT SWAP
            </h1> -->

            <div class="lg:grid grid-cols-2">

                <section class="flex justify-center">
                    <img class="w-96 bg-yellow-500 p-5 aspect-w-16 aspect-h-16" :src="dataUrl" />
                </section>

                <section class="text-left p-3 text-gray-200 text-lg">
                    <p>
                        Send Bitcoin Cash (BCH) to the address shown -OR- click on the QR Code to make a payment request.
                    </p>

                    <p class="mt-5">
                        Pawnbroker Dollars (PWND) will be sent to you automatically (after 1 block confirmation).
                    </p>

                    <h1 class="text-gray-200 text-xl font-bold mt-10">
                        "Official" PWND Treasury Address
                    </h1>
                    <span class="text-red-300 text-sm font-bold">bitcoincash:</span>
                    <h1 class="text-red-400 text-xl font-bold cursor-pointer -mt-2 hidden lg:block" @click="openTreasury">
                        {{displayAddr}}
                    </h1>
                    <h1 class="text-red-400 text-xl font-bold cursor-pointer -mt-2 lg:hidden" @click="openTreasury">
                        {{displayShortAddr}}
                    </h1>
                </section>

            </div>

        </div>
    </main>
</template>

<script>
/* Import modules. */
import QRCode from 'qrcode'

export default {
    data: () => {
        return {
            dataUrl: null,
            treasuryAddr: null,
        }
    },
    computed: {
        displayAddr() {
            return this.treasuryAddr.slice(12)
        },

        displayShortAddr() {
            return this.displayAddr.slice(0, 12) + ' ... ' + this.displayAddr.slice(-12)
        },

    },
    methods: {
        async init() {
            this.dataUrl = await QRCode
                .toDataURL(this.treasuryAddr)
                .catch(err => console.error(err))
            console.log('Data URL (treasuryAddress):', this.dataUrl)
        },

        openTreasury() {
            window.open('https://blockchair.com/bitcoin-cash/address/pra0e7033lrsgmk2r8vgp03hfsqtqwt76g4h0sjzax')
        },

    },
    created: function () {
        /* Set treasury address. */
        this.treasuryAddr = 'bitcoincash:pra0e7033lrsgmk2r8vgp03hfsqtqwt76g4h0sjzax'

        /* Init */
        this.init()

    },
    mounted: function () {
        //
    },
}
</script>
