import Head from 'next/head'
import {LandingPageHeader} from './../components/headers/landing-page-header/'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="description" content="Browse our vast selection of North American React Developer profiles and chose the one that best suits your needs!"/>
        <title>Pick A Dev</title>
      </Head>
      <LandingPageHeader title="Pick A Dev" tagline="Browse our vast selection of React Developer profiles and choose the one that best suits your needs!"/>
      <main>
        
      </main>
    </>
  )
}
