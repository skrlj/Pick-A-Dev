import Image from 'next/image'
import bannerImage from "./../../../public/pickadev.png"

function LandingPageHeader({title, tagline, ...props}) {
    return (
        <header className='bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-200 via-orange-500 to-red-500 w-full py-[5rem]'>
            <figure className='flex justify-center flex-col items-center'>
                <Image
                    className='mx-auto w-[30rem]'
                    src={bannerImage}
                    alt='pick a dev logo'
                />
                <figcaption className='text-center'>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-blue-violet py-3">
                        {title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl font-semibold text-regal-blue">{tagline}</p>
                </figcaption>
            </figure>
        </header>
     );
}

export default LandingPageHeader;