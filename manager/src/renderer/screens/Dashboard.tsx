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
                  parent: { marginTop: -30, height: 200 }
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

            <section className="flex flex-row gap-2 justify-around">

                <Link to="/stats" className="px-5 py-1 flex flex-col items-end group bg-gray-100 border-2 border-blue-500 rounded-lg shadow-md transform duration-200 hover:scale-110">
                    <span className="text-lg text-gray-800 font-bold uppercase">
                        Stats
                    </span>
                </Link>

                <Link to="/settings" className="px-5 py-1 flex flex-col items-end group bg-gray-100 border-2 border-blue-500 rounded-lg shadow-md transform duration-200 hover:scale-110">
                    <span className="text-lg text-gray-800 font-bold uppercase">
                        Settings
                    </span>
                </Link>

            </section>

            <div className="my-2 mx-2 border-t border-gray-500" />

            <section>
                <div className="mt-5 w-96 mx-auto px-3 py-1 flex justify-between items-center border-2 border-indigo-500 rounded-lg bg-indigo-100 shadow-md">
                    <h3 className="text-gray-500 font-bold">
                        XHedge Validators
                    </h3>

                    <div className="flex flex-row items-center">
                        <h3 className="text-gray-700 text-lg font-bold">
                            22
                        </h3>

                        <h3 className="ml-1 mt-1 text-gray-500 text-xs font-bold">
                            (32)
                        </h3>
                    </div>
                </div>

                <div className="mt-5 w-96 mx-auto px-3 py-1 flex justify-between items-center border-2 border-indigo-500 rounded-lg bg-indigo-100 shadow-md">
                    <h3 className="text-gray-500 font-bold">
                        Messages
                    </h3>

                    <h3 className="text-gray-700 text-lg font-bold">
                        1 (10)
                    </h3>
                </div>

                <div className="mt-5 w-96 mx-auto px-3 py-1 flex justify-between items-center border-2 border-indigo-500 rounded-lg bg-indigo-100 shadow-md">
                    <h3 className="text-gray-500 font-bold">
                        Voting Proposals
                    </h3>

                    <h3 className="text-gray-700 text-lg font-bold">
                        0 (3)
                    </h3>
                </div>
            </section>

        </main>
    )
}

export default Dashboard
