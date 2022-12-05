import Image from 'next/image'

function DeveloperCard({fullName, avatar, jobTitle, experience, availability}) {

    const variants = {
        available: 'bg-emerald-400 rounded-md px-3 py-2 text-sm font-bold text-emerald-800 shadow-md uppercase',
        unavailable: 'bg-red-400 rounded-md px-3 py-2 text-sm text-red-800 font-bold uppercase'
    }

    return ( 
        <aside className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 w-full m-4 sm:m-0 sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33%_-_0.5rem)] py-10 border-gray-200/50 rounded-lg shadow-lg'>
            <header className='flex flex-col items-center' >
                <Image
                src={avatar}
                width={128}
                height={128}
                />
                <h2 className="text-3xl font-semibold text-teal-900 mt-1">{fullName}</h2>
            </header>

            <dl className='flex flex-col items-center text-sm'>
                <dt className='sr-only'>Job Title</dt>
                <dd className='text-lg font-semibold'>{jobTitle}</dd>

                <dt className='sr-only'>Experience</dt>
                <dd className='mb-4 text-md font-semibold'>{experience} year(s) experience</dd>

                <dt className='sr-only'>Availability</dt>
                <dd className={`${availability? variants.available: variants.unavailable}`} >{availability ? "available": "not available"}</dd>
            </dl>
        </aside>
     );
}

export default DeveloperCard;