import Image from 'next/image'

function DeveloperCard({fullName, avatar, jobTitle, experience, availability}) {

    const variants = {
        available: 'bg-lime-400 rounded-md px-3 py-1 text-sm text-lime-800',
        unavailable: 'bg-red-400 rounded-md px-3 py-1 text-sm text-red-800'
    }

    return ( 
        <aside className='bg-teal-100 w-full m-4 sm:m-0 sm:w-[calc(50%_-_2rem)] lg:w-[calc(33%_-_1rem)] py-10 border-gray-200/50 rounded-lg shadow-md'>
            <header className='flex flex-col items-center' >
                <Image
                src={avatar}
                width={128}
                height={128}
                />
                <h2 className="text-3xl font-semibold text-gray-800">{fullName}</h2>
            </header>

            <dl className='flex flex-col items-center text-gray-400 text-sm'>
                <dt className='sr-only'>Job Title</dt>
                <dd className='text-lg text-gray-600 font-semibold'>{jobTitle}</dd>

                <dt className='sr-only'>Experience</dt>
                <dd className='mb-4'>{experience}</dd>

                <dt className='sr-only'>Availability</dt>
                <dd className={`${availability? variants.available: variants.unavailable}`} >{availability ? "available": "not available"}</dd>
            </dl>

{/* className='bg-lime-400 rounded-md px-3 py-1 text-sm text-lime-800' */}
        </aside>
     );
}

export default DeveloperCard;