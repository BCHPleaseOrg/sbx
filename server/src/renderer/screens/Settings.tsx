import Header from '../components/Header'

import icon from '../../../assets/logo.png'

const Dashboard = () => {
    return (
        <main>
            <Header />

            <h1 className="mt-10 text-5xl text-pink-300 font-bold">
                SETTINGS
            </h1>

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

            </div>
        </main>
    )
}

export default Dashboard
