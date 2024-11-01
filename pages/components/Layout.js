import Head from 'next/head'
import Link from 'next/link'

const Layout = ({children, title="Crypto Currents"}) => {
    return (
        <div className = "Layout">
            <Head>
                <title>Crypto Currents</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className="header">
                <Link href="/" passHref>
                    <a>
                        <img src="/CryptoCurrents.png" alt="Crypto Currents"/>
                    </a>
                </Link>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout
