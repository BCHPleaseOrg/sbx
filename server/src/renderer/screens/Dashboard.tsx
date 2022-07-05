import { Link } from 'react-router-dom'

import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
} from 'victory'

import Header from '../components/Header'

import icon from '../../../assets/logo.png'

const data = [
    { month: 2, earnings: 13000 },
    { month: 3, earnings: 16500 },
    { month: 4, earnings: 14250 },
    { month: 5, earnings: 19000 },
    { month: 6, earnings: 18000 },
    { month: 7, earnings: 29000 },
]

const Dashboard = () => {
    return (
        <main>
            <Header />

            <h1 className="mt-3 text-center text-sm text-gray-700 font-bold uppercase">
                Transaction Volume
            </h1>

            <VictoryChart
                className="mt-0"
                style={{
                  data: { fill: "tomato", opacity: 0.7 },
                  labels: { fontSize: 12 },
                  parent: { border: "1px solid #ccc", marginTop: -30, height: 200 }
                }}
                domainPadding={20}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[2, 3, 4, 5, 6, 7]}

                    tickFormat={[
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul'
                    ]}
                />

                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`$${x / 1000}k`)}
                />

                <VictoryBar
                    style={{
                      data: { fill: "tomato", opacity: 0.7 },
                      labels: { fontSize: 12 },
                      parent: { border: "1px solid #ccc", padding: 0, margin: 0, height: "50px" }
                    }}

                    data={data}
                    // data accessor for x values
                    x="month"
                    // data accessor for y values
                    y="earnings"
                />
            </VictoryChart>

            <div className="">
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

                <Link to="/settings" className="flex flex-col items-end group">
                    <i className="fa-solid fa-computer text-gray-500 text-xl group-hover:text-pink-500"></i>

                    <span className="block text-gray-500 font-bold text-xs text-right group-hover:text-pink-500">
                        Settings
                    </span>
                </Link>
            </div>
        </main>
    )
}

export default Dashboard
