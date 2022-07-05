import {
    MemoryRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import icon from '../../assets/icon.svg'

import './App.css'

import Dashboard from './screens/Dashboard'
import Settings from './screens/Settings'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    )
}
