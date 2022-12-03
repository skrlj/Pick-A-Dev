import { LogoSvg } from "./../icons";

function NavBarBranding() {
    return ( 
        <figure className="flex items-center gap-1">
            <LogoSvg className="fill-purple-900 w-7"/>
            <figcaption>
                <h1>Pick A Dev</h1>
            </figcaption>
    </figure>
     );
}

export default NavBarBranding;