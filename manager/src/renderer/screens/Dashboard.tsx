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

            <section className="mt-3">

                <div className="flex flex-col">
                    <div className="flex gap-4">

                        <div className="w-96 ml-3 flex flex-col gap-2">
                            <div className="p-2 flex flex-col border-2 border-pink-700 bg-pink-500 rounded-lg">
                                <span className="text-pink-200 text-xs text-center font-bold uppercase">
                                    Cumulative Volume
                                </span>

                                <span className="text-pink-200 text-lg text-center font-bold">
                                    $1,346,534,977
                                </span>
                            </div>

                            <div className="p-2 flex flex-col border-2 border-pink-700 bg-pink-500 rounded-lg">
                                <span className="text-pink-200 text-xs text-center font-bold uppercase">
                                    Total Value Locked
                                </span>

                                <span className="text-pink-200 text-lg text-center font-bold">
                                    $3,902,470.10
                                </span>
                            </div>
                        </div>

                        <div className="absolute top-14 right-5 flex z-10">
                            <Link to="/federation" className="mx-1 px-1 py-0 border-2 border-pink-700 bg-pink-500 text-sm rounded-full">
                                <span className="text-sm text-pink-200 font-bold">
                                    D
                                </span>
                            </Link>

                            <Link to="/federation" className="mx-1 px-1 py-0 border-2 border-pink-700 bg-pink-500 text-sm rounded-full">
                                <span className="text-sm text-pink-200 font-bold">
                                    W
                                </span>
                            </Link>

                            <Link to="/federation" className="mx-1 px-1 py-0 border-2 border-pink-700 bg-pink-500 text-sm rounded-full">
                                <span className="text-sm text-pink-200 font-bold">
                                    M
                                </span>
                            </Link>
                        </div>

                        <VictoryChart
                            className="mt-0"
                            style={{
                              data: { fill: "tomato", opacity: 0.7 },
                              labels: { fontSize: 12 },
                              parent: { marginTop: -16, height: 175 }
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
                    </div>

                    <div className="mx-3 flex gap-2 justify-around">
                        <div className="p-2 flex flex-col flex-grow border-2 border-pink-700 bg-pink-500 rounded-lg">
                            <span className="text-pink-200 text-xs text-center font-bold uppercase">
                                Total Tokens
                            </span>

                            <span className="text-pink-200 text-lg text-center font-bold">
                                14
                            </span>
                        </div>

                        <div className="p-2 flex flex-col flex-grow border-2 border-pink-700 bg-pink-500 rounded-lg">
                            <span className="text-pink-200 text-xs text-center font-bold uppercase">
                                Total Users
                            </span>

                            <span className="text-pink-200 text-lg text-center font-bold">
                                38,045
                            </span>
                        </div>

                        <div className="p-2 flex flex-col flex-grow border-2 border-pink-700 bg-pink-500 rounded-lg">
                            <span className="text-pink-200 text-xs text-center font-bold uppercase">
                                Cumulative Txs
                            </span>

                            <span className="text-pink-200 text-lg text-center font-bold">
                                4,133,151
                            </span>
                        </div>
                    </div>
                </div>

            </section>

            <div className="my-5 mx-3 border-t-2 border-gray-500" />

            <section className="-mt-3 flex flex-row px-3 justify-around">

                <Link to="/nodes" className="w-32 px-5 py-1 flex flex-col items-center group bg-gray-100 border-2 border-blue-500 rounded-lg shadow-md transform duration-200 hover:scale-105">
                    <span className="text-lg text-gray-800 font-bold uppercase">
                        Nodes
                    </span>
                </Link>

                <Link to="/federation" className="w-32 px-5 py-1 flex flex-col items-center group bg-gray-100 border-2 border-blue-500 rounded-lg shadow-md transform duration-200 hover:scale-105">
                    <span className="text-lg text-gray-800 font-bold uppercase">
                        The Fed
                    </span>
                </Link>

                <Link to="/settings" className="w-32 px-5 py-1 flex flex-col items-center group bg-gray-100 border-2 border-blue-500 rounded-lg shadow-md transform duration-200 hover:scale-105">
                    <span className="text-lg text-gray-800 font-bold uppercase">
                        Settings
                    </span>
                </Link>

            </section>

            <section>
                <Link to="/validators" className="mt-5 w-96 mx-auto px-3 py-1 flex justify-between items-center border-2 border-indigo-500 rounded-lg bg-indigo-100 shadow-md transform duration-200 hover:scale-105">
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
                </Link>

                <Link to="/messages" className="mt-5 w-96 mx-auto px-3 py-1 flex justify-between items-center border-2 border-indigo-500 rounded-lg bg-indigo-100 shadow-md transform duration-200 hover:scale-105">
                    <h3 className="text-gray-500 font-bold">
                        Messages
                    </h3>

                    <div className="flex flex-row items-center">
                        <h3 className="text-gray-700 text-lg font-bold">
                            3
                        </h3>

                        <h3 className="ml-1 mt-1 text-gray-500 text-xs font-bold">
                            (10)
                        </h3>
                    </div>
                </Link>

                <Link to="/voting" className="mt-5 w-96 mx-auto px-3 py-1 flex justify-between items-center border-2 border-indigo-500 rounded-lg bg-indigo-100 shadow-md transform duration-200 hover:scale-105">
                    <h3 className="text-gray-500 font-bold">
                        Voting Proposals
                    </h3>

                    <div className="flex flex-row items-center">
                        <h3 className="text-gray-700 text-lg font-bold">
                            1
                        </h3>

                        <h3 className="ml-1 mt-1 text-gray-500 text-xs font-bold">
                            (3)
                        </h3>
                    </div>
                </Link>
            </section>

        </main>
    )
}

export default Dashboard
