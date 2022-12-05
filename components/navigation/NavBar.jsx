import LoginButton from "./LoginButton";
import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import GitHubLink from "./GitHubLink";

function NavBar(){
    return (
        <nav className="py-3 px-5 bg-teal-900 relative flex justify-between items-center">
            <NavBarBranding/>
            <NavBarLinks/>
            <div className='hidden md:flex gap-8'>
                <figure className='flex flex-col items-center  '>
                    <LoginButton/>
                <figcaption className='text-[11px] text-cyan-50'>login</figcaption>
                </figure>

                <figure className='flex flex-col items-center'>
                    <GitHubLink/>
              <figcaption className='text-[11px] text-cyan-50'>github</figcaption>
              </figure>
           </div>
           <MobileMenuButton className="md:hidden"/>
        </nav>
    );
}

export default NavBar;