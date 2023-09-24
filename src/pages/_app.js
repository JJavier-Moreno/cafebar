import '@/styles/globals.css'
import { CafeProvider } from '../../context/CafeProvider'

export default function App({ Component, pageProps }) {
  return (

    <CafeProvider>
      <Component {...pageProps} />
    </CafeProvider>

  )
}
