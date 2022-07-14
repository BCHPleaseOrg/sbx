import Header from '../components/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import bchIcon from 'cryptocurrency-icons/svg/icon/bch.svg'
import btcIcon from 'cryptocurrency-icons/svg/icon/btc.svg'

import icon from '../../../assets/logo.png'

import ListItemAssetPair from '../components/ListItemAssetPair'

const Assets = () => {
    return (
        <main>
            <Header />

            <section className="mx-3">
                <h1 className="text-5xl text-yellow-700 font-bold">
                    Assets Template
                </h1>

                <p>
                    Bridged assets will be denoted with the suffix ".b".
                </p>
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
                    Smart Bitcoin (sBCH) --- Ethereum (ETH.b)
                </div>

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
