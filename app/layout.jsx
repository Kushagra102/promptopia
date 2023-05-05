import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
    title: "Promptopia",
    description: "An AI prompt discoverer and sharer for writers",
}


const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div className='main'>
                    <div className='gradient'></div>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </body>

        </html>
    )
}

export default RootLayout