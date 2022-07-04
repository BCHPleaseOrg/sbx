import { VictoryBar } from 'victory'

import icon from '../../../assets/logo.png'

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const Dashboard = () => {
    return (
        <main>
            <header className="flex items-center py-2 bg-gradient-to-r from-indigo-100 to-indigo-300 border-b-2 border-indigo-500 shadow-md justify-between">
                <img className="w-8 mx-3" alt="icon" src={icon} />

                <h1 className="mx-3 text-2xl font-bold text-right">
                    Smart Bitcoin Exchange Server
                </h1>
            </header>

            <div className="Hello">
            </div>

            <h1 className="text-5xl text-pink-300 font-bold">
                THIS IS A DASHBOARD
            </h1>

            <VictoryBar />

            <div className="Hello">
                <a
                    href="https://electron-react-boilerplate.js.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button type="button">
                    <span role="img" aria-label="books">
                    📚
                    </span>
                    Read our docs
                    </button>
                </a>

                <a
                    href="https://github.com/sponsors/electron-react-boilerplate"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button type="button">
                    <span role="img" aria-label="books">
                    🙏
                    </span>
                    Donate
                    </button>
                </a>
            </div>
        </main>
    )
}

export default Dashboard
