function ContentPageHeader({title, tagline, type}) {
    return (
      <>
        <header className="text-center pt-20 bg-teal-900 to-black">
          <h1 className="text-lg font-semibold text-gray-500">
            {type}
          </h1>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-500 sm:text-5xl lg:text-6xl">
            {title}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            {tagline}
          </p>
        </header>
      </>
    );
  }
  
  export default ContentPageHeader;