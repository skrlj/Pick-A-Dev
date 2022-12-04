import Head from 'next/head'
import { ContentPageHeader } from "../headers/content-page-header";

export default function ContentPageLayout({children, title, type, tagline}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <ContentPageHeader tagline={tagline} type={type} title={title} />
      <div className='bg-gradient-to-b from-teal-900 to-black'>
      <main className='flex flex-row flex-wrap justify-center xl:justify-start sm:gap-4 p-4 lg:max-w-7xl py-16 mx-auto '>{children}</main>
      </div>
      
    </>
  );
}