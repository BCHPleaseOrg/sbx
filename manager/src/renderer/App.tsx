import {
    MemoryRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import icon from '../../assets/icon.svg'

import './App.css'

import Dashboard from './screens/Dashboard'
import Federation from './screens/Federation'
import Nodes from './screens/Nodes'
import Settings from './screens/Settings'

export default function App() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/federation" element={<Federation />} />
                    <Route path="/nodes" element={<Nodes />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Router>

            <footer className="absolute bottom-0 px-3 py-1 w-full flex justify-between items-center bg-gray-800 border-t-2 border-pink-500">
                <h3 className="text-green-300 text-xs font-bold uppercase">
                    Connected
                </h3>

                <div className="text-gray-500 text-xs">
                    <FontAwesomeIcon className="text-green-300 text-sm transform -rotate-45" icon={["fab", "bitcoin"]} />
                </div>
            </footer>
        </main>
    )
}
