import Link from 'next/link'
import { LogoSvg } from "./../icons";

function NavBarBranding() {
    return ( 
        <Link href='/'>
            <figure className="flex items-center gap-1">
                <LogoSvg href="/index" className="fill-cyan-50 w-7"/>
                <figcaption>
                    <h1 className='uppercase font-extrabold text-cyan-50 text-xl'>Pick A Dev</h1>
                </figcaption>
            </figure>
        </Link>    
     );
}

export default NavBarBranding;