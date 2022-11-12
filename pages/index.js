import Head from 'next/head'
import { PageHeading } from "../components/page-heading"

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name='desciption' content='Browse our vast selection of North American React Developer profiles and chose the one that best suits your needs!'/>
        <title>Pick A Dev</title>
      </Head>
      
      <PageHeading title="Pick A Dev" tagline="Browse our vast selection of React Developer profiles and choose the one that best suits your needs!"/>
    </>
  )
}
