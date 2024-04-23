import { MobileNavbar } from "./mobile-navbar";
import NavItems from "./nav-items";

const LandingNavbar = () => {
    return(
        <header className="fixed top-0 bg-background shadow-md md:py-7 md:px-32 py-4 w-full">
            <nav>
                <div className="hidden md:flex flex-row mx-auto justify-center items-center text-md w-full max-w-7xl">
                    <NavItems/>
                </div>
                <div className="md:hidden flex flex-row justify-between px-8 py-3 w-full">
                    <h1 className="font-extrabold text-xl">Satiscript</h1>
                    <MobileNavbar/>
                </div>
            </nav>
        </header>
    );
};

export default LandingNavbar;