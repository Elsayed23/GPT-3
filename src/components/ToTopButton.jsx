import React from 'react'
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const ToTopButton = () => {

    const [isShow, setIsShow] = React.useState(false)

    window.addEventListener("scroll", () => {
        window.scrollY > 100 ? setIsShow(true) : setIsShow(!true)
    })

    return (
        <div className={`fixed bottom-5 ${isShow ? 'right-4 opacity-100' : '-right-10 opacity-0'} duration-500 z-50`} onClick={() => { window.scrollTo(0, 0) }}>
            <IconButton className='bg-[#FF4820]'>
                <FontAwesomeIcon icon={faArrowUp} />
            </IconButton>
        </div>
    )
}

export default ToTopButton