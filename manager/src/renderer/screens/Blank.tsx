import Header from '../components/Header'

import icon from '../../../assets/logo.png'

const Blank = () => {
    return (
        <main>
            <Header />

            <h1 className="mt-10 text-5xl text-pink-300 font-bold">
                Blank Template
            </h1>

            <section className="">
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
            </section>

        </main>
    )
}

export default Blank
