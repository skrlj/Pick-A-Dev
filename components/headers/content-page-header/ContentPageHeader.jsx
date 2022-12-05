function ContentPageHeader({title, tagline, type}) {
    return (
      <>
        <header className="text-center pt-20 bg-teal-900">
          <div className="w-[28rem] sm:w-[35rem] md:w-[40rem] lg:w-[45rem] mx-auto bg-emerald-200 border-emerald-100 border-2 shadow py-3 rounded-lg">
            <h1 className="text-lg font-semibold text-teal-900 uppercase">
              {type}
            </h1>
            <p className="mt-1 text-4xl font-bold tracking-tight text-teal-900 sm:text-5xl lg:text-6xl">
              {title}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-md md:text-lg lg:text-xl text-black animate-bounce">
              {tagline}
            </p>
          </div>
        </header>
      </>
    );
  }
  
  export default ContentPageHeader;