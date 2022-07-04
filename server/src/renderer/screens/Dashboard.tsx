import icon from '../../../assets/logo.png'

const Dashboard = () => {
    return (
        <main>
            <header className="flex items-center py-2 bg-gradient-to-r from-green-100 to-green-300 justify-between">
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
