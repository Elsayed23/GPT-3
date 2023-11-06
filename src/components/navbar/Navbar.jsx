import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import logo from '../../assets/logo.svg'

const Nav = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navListData = ['Home', 'What is GPT?', 'Case Studies', 'Library']

    const list = navListData.map((item, idx) => {
        return (
            <Typography
                key={idx}
                as="li"
                variant="small"
                color="white"
            >
                <a href="#" className="flex items-center px-4 py-2">
                    {item}
                </a>
            </Typography>
        )
    })


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5">
            {list}
        </ul>
    );

    return (
        <Navbar className="absolute top-0 w-full left-0  bg-[#040C18] lg:bg-transparent z-50 backdrop-saturate-0 backdrop-filter-none shadow-none  pb-10 lg:pb-6 pt-10 max-w-full border-none">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <img src={logo} alt="logo" className="w-[62.557px] h-[16.016px]" />
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
                </div>
                <div className="hidden lg:inline-block">
                    <button className='px-5'>Sign in</button>
                    <button className='bg-[#FF4820] px-7 py-3 rounded-md mr-3'>Sign up</button>
                </div>
                {/* bg-[#FF4820] px-7 py-3 rounded-md */}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="white"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="white"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="mb-2 flex flex-col">
                        <button className='px-5 py-3'>Sign in</button>
                        <button className='bg-[#FF4820] px-7 py-3 rounded-md'>Sign up</button>
                    </div>
                </div>
            </Collapse >
        </Navbar>
    );
}

export default Nav