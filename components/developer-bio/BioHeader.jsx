function BioHeader({ fullName, city, heading, email }) {
    return ( 
        <header className="max-w-2xl mb-8">
            <h1 className="text-2xl text-zinc-800">
            <span className="text-teal-900 font-semibold">{fullName}</span> <br></br>Lives in <span className="font-semibold text-teal-900">{city}</span> <br></br> Acting Role: <span className="text-teal-900 italic">{heading}</span>
            </h1>
            <p className="mt-6 text-base text-zinc-600 ">
            Organic meggings sus, lo-fi adaptogen prism hammock sartorial. Everyday
            carry sartorial brunch, cliche YOLO umami etsy hoodie ennui narwhal
            venmo cornhole. Ugh kitsch art party asymmetrical pitchfork shabby chic.
            VHS microdosing sartorial, umami seitan raclette chia photo booth
            tousled listicle narwhal poutine banjo tattooed. Coloring book keytar
            trust fund lomo.
            </p>

            <h2 className="text-base font-semibold tracking-tight text-zinc-800 mt-4">
                Email me: <span className="text-teal-900">{email}</span>
            </h2>
      </header>
     );
}

export default BioHeader;