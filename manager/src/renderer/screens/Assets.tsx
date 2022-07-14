import Header from '../components/Header'

import icon from '../../../assets/logo.png'

import ListItemAssetPair from '../components/ListItemAssetPair'

const Assets = () => {
    return (
        <main>
            <Header />

            <section className="m-3">
                <h1 className="tracking-widest text-2xl font-bold text-gray-500 text-center opacity-50 uppercase">
                    Assets
                </h1>

                <h3 className="flex justify-center items-center text-gray-500 font-bold opacity-70">
                    Bridged assets are denoted with suffix <span className="ml-1 text-red-700 font-bold">".b"</span>
                </h3>

            </section>

            <section className="mx-3">
                <ListItemAssetPair
                    base="SBCH"
                    trade="BCH"
                />

                <ListItemAssetPair
                    base="SBCH"
                    trade="BTC"
                />

                <ListItemAssetPair
                    base="SBCH"
                    trade="ETH"
                />

                <div className="mt-3 bg-pink-300 border-2 border-pink-500 rounded-lg">
                    Smart Bitcoin (sBCH) --- Binance USD (BUSD.b)
                </div>

                <div className="mt-3 bg-pink-300 border-2 border-pink-500 rounded-lg">
                    Smart Bitcoin (sBCH) --- Dai (DAI.b)
                </div>

                <div className="mt-3 bg-pink-300 border-2 border-pink-500 rounded-lg">
                    Smart Bitcoin (sBCH) --- Tether (BUSD.b)
                </div>

                <div className="mt-3 bg-pink-300 border-2 border-pink-500 rounded-lg">
                    Smart Bitcoin (sBCH) --- USD Coin (USDC.b)
                </div>

            </section>

        </main>
    )
}

export default Assets
