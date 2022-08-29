import Head from 'next/head'
import Image from 'next/image'
import { Header } from 'flotiq-components-react'

const NotFoundPage = () => (
    <main className="flex flex-col h-screen justify-center items-center">
        <Head>
            <title>Page not found</title>
        </Head>
        <div className="text-center mt-5 mb-5">
            <Image src="/Logo.svg" alt="Flotiq" width={300} height={85} />
        </div>
        <Header
            level={1}
            className="text-center m-24 text-5xl text-light-blue font-bold"
        >
            Page not found, sorry
        </Header>
    </main>
)

export default NotFoundPage
