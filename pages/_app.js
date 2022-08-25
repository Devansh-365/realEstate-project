import HouseContextProvider from '../context/HouseContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <HouseContextProvider>
      <Component {...pageProps} />
    </HouseContextProvider>
  )
}

export default MyApp
