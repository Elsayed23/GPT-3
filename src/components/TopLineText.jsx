import React from 'react'

const TopLineText = ({ text, classes }) => {
    return (
        <h2 className={`topLine relative font-extrabold text-xl before:absolute before:-top-3 before:left-0 before:h-[2.4px] before:w-11 ${classes}`}>{text}</h2>
    )
}

export default TopLineText