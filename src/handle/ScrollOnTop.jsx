import React from 'react';
import {useEffect, useState} from 'react'

function ScrollOnTop() {
    const [scrollbutton,setScrollButton] = useState(false);

    const handleScrollY = () => {
        if(window.scrollY > 150) {
            setScrollButton(true)
        }
        else{
            setScrollButton(false)
        }
    }

    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScrollY)
    },[])

    return (
    <>
        {scrollbutton && (
            <button style = {{
                position: 'fixed',
                bottom: '50px',
                right: '50px',
                height:'50px',
                widows: '100px',
                fontSize: '50px',
                background: '#ccc',
                color:'#000',
                width: '50px',
                borderRadius: '5px',
                border: 'none',
                zIndex:10000000
            }}
                onClick = {scrollUp}
            >^</button>
        )}
    </>
  )
}

export default ScrollOnTop