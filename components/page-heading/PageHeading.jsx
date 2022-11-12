function PageHeading({title, tagline, ...props}) {
    return (
        <div className="bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 w-full flex justify-center py-[5rem]">
            <header className="text-center">
                <img className='mx-auto w-[30rem]' src='pickadev.png' alt='pick a dev'></img>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-blue-violet py-3">{title}</h1>
                <p className="font-mono text-sm md:text-lg lg:text-2xl text-regal-blue">{tagline}</p>
            </header>
        </div>
     );
}

export default PageHeading;