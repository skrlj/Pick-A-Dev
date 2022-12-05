import Image from 'next/image'
import bannerImage from "./../../../public/pickadev.png"

function LandingPageHeader({title, tagline, ...props}) {
    return (
        <header className='bg-gradient-to-b from-teal-900 to-black w-full py-[5rem] h-screen'>
            <figure className='flex flex-col'>
                <figcaption className='px-12 lg:px-0 lg:mx-auto lg:items-center'>
                    <h1 className="lg:text-center animate-pulse text-4xl md:text-6xl lg:text-8xl font-extrabold text-cyan-100 py-3 uppercase">
                        {title}
                    </h1>
                    <p className="lg:bg-teal-700 lg:shadow-lg  lg:p-3 lg:rounded-full text-base md:text-lg lg:text-xl text-teal-100">{tagline}</p>
                </figcaption>
                <Image
                    className='w-[50rem] mx-auto p-10'
                    src={bannerImage}
                    alt='pick a dev logo'
                />
            </figure>
        </header>
     );
}

export default LandingPageHeader;