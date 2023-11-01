import React from 'react'
import { Typography } from "@material-tailwind/react";
import logo from '../../assets/logo.svg'


const LINKS = [
    {
        title: "Links",
        items: ["Overons", "Social Media", "Counters", "Contact"],
    },
    {
        title: "Company",
        items: ["Terms & Conditions", "Privacy Policy", "Contact"],
    },
    {
        title: "Get in touch",
        items: ["Faqous-Shaqia-Egypt", "+20 1152 989 114", "elsayedkewan123@gmail.com"],
    },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className='bg-[#031B34] pt-44 flex flex-col gap-36'>
            <div className="t__ flex flex-col items-center gap-16">
                <h1 className='gradient_text font-extrabold text-4xl md:text-5xl max-w-[821px] text-center leading-snug px-4'>Do you want to step in to the future before others</h1>
                <button className='py-5 px-6 border text-white border-white hover:bg-white hover:text-black duration-300 font-medium'>Request Early Access</button>
            </div>
            <div className="relative w-full">
                <div className="mx-auto w-full max-w-7xl px-4">
                    <div className="flex flex-col lg:flex-row justify-between ">
                        <div className="mb-6 basis-6/12">
                            <img src={logo} alt="logo" className='mb-4' />
                            <h6 className="text-xs text-white font-thin">
                                All Rights Reserved
                            </h6>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 basis-4/5 justify-between gap-7 md:gap-0">
                            {LINKS.map(({ title, items }) => (
                                <ul key={title}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-3 font-medium text-lg text-white"
                                    >
                                        {title}
                                    </Typography>
                                    {items.map((link) => (
                                        <li key={link}>
                                            <Typography
                                                color="white"
                                                className="py-1.5 font-thin text-sm"
                                            >
                                                {link}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 text-center border-t border-blue-gray-50 py-4">
                        <Typography
                            variant="small"
                            className="text-center font-normal text-white"
                        >
                            &copy; {currentYear} Elsayed Kewan. All
                            Rights Reserved.
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer