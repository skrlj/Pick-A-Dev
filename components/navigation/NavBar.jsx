import LoginButton from "./LoginButton";
import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";

function NavBar(){
    return (
        <nav className="bg-teal-900 p-2 relative flex justify-between">
            <NavBarBranding/>
            <NavBarLinks/>
            <LoginButton className="md:block md:text-right"/>
            {/* if there was a few elements on the right side of the nav bar use flex and justify-end instead */}
            {/* <LoginButton className="md:flex md:justify-end "/> */}
            <MobileMenuButton className="md:hidden"/>
        </nav>
    );
}

export default NavBar;