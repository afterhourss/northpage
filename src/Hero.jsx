import { useState } from "react";
import { animated,useSpring } from "@react-spring/web";

import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Overlay from "./Overlay";



function Hero() {
    const [overlay, setOverlay] = useState(false);

    function handleClick(){
        setOverlay(!overlay)
    }

    const springs = useSpring({
        from: { y: 200, opacity: 0},
        to: { y: 0, opacity: 1},
    })

    const arrowSprings = useSpring({
        from: { x: 100, opacity: 0},
        to: [
            { x: 0, opacity: 1},
            { x: 50, opacity: 0},
            { x: 0, opacity: 1},
            { x: 50, opacity: 0},
            { x: 0, opacity: 1},
        ],
    })
   

  return (
    <>
    {overlay && <Overlay hidden={() => handleClick()}/>}
    <div className="hero-container">
        <div className="hero-content">
            <div className="hero-title">
                <ReactTyped strings={['North.']} typeSpeed={200}/>
            </div>
            <animated.div className="hero-para" style={{...springs}}>
                <div>both mentally and physically tired by being college student, i'd like settle in front of my computer all day. currently learn how to level up my skills by <span onClick={() => handleClick()}>develop and stuff.</span>
                    <animated.div style={{display: "inline-block", ...arrowSprings}}>&lt;&lt;</animated.div>
                </div>
            </animated.div>
            <animated.div className="hero-icon" style={{...springs}}>
                <div className="icon">
                    <a href="https://github.com/afterhourss"><FaGithub/></a>
                </div>
                <div className="icon"> 
                    <a href="adiptabagasss@gmail.com?subject=Feedback&body=Message"><MdOutlineEmail /></a>
                </div>
                <div className="icon">
                    <a href="https://twitter.com/northgas_"><FaTwitter /></a>
                </div>
            </animated.div>
        </div>
        <div className="hero-image">
            <img src={'/giphy.gif'} alt="cat typing" />
        </div>
    </div>
    </>
  )
}

export default Hero