import NavItems from "./nav-items";

const LandingNavbar = () => {
    return(
        <header>
            <nav className="z-50 bg-background fixed md:flex hidden shadow-md py-7 px-32 w-full">
                <div className="flex flex-row mx-auto justify-center items-center text-md w-full max-w-7xl">
                    <NavItems/>
                </div>
            </nav>
        </header>
    );
};

export default LandingNavbar;