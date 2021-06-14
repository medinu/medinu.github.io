import React from 'react'
const UpArrow = require('../Assets/arrow-up.svg');

export default function ScrollToTopBtn() {
    const UpArrowStyle = {
        backgroundColor: "rgba(122, 122, 122, 0.25)",
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "inline-block",
        alignItems: "center",
        opacity: "0"
    }

    const ArrowImgStyle = {
        height: "50px",
        width: "50px",
        position: "relative",
        margin: "auto",
        right: "1px"
    }

    

    const scrollToTopLogic = ()=>{
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    function handleScroll() {
        let rootElement = document.documentElement;
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if ((rootElement.scrollTop / scrollTotal ) > 0.2 ) {
            // Show button
            document.getElementById("scrollToTop").style.opacity = 1;
            document.getElementById("scrollToTop").style.transform = "translateY(0)";
        } else {
            // Hide button
            document.getElementById("scrollToTop").style.opacity = 0;
            document.getElementById("scrollToTop").style.transform = "translateY(0)";

        }
    }

    document.addEventListener("scroll", handleScroll);

    return (
        <a id="scrollToTop" style={UpArrowStyle} onClick={scrollToTopLogic}>
            <img style={ArrowImgStyle} src={UpArrow}/>
        </a>
    )
}
