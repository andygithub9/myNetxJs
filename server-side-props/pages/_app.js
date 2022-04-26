import { MyWebContextProvider } from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <MyWebContextProvider>
      <Component {...pageProps} />
    </MyWebContextProvider>
  )
}
export default MyApp
