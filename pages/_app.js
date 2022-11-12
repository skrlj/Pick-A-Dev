import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale-1"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
   
}

export default MyApp
