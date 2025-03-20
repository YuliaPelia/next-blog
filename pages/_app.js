import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/layout/layout'


function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>The Book of the Month</title>
      <meta name="description" content="The Book of the Month" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
