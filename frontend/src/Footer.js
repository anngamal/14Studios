
import React from "react";
import { Link } from "react-router-dom"

export default function Footer(){
    function handleInstaClick(){
        window.open('https://www.instagram.com/ahmedelmontaser?igsh=MWY4b2F3dmNwZWloZA==')
     }
      function handleFbClick(){
         window.open("https://www.facebook.com/muns.elmontaser?mibextid=uzlsIk")
      }
    return(
        <div className="footerDiv">
            <Link to="/instagram">
                <img onClick={handleInstaClick} className="instaLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcDyCA016g44reJs44LZtQWvnyOdUd7Y-aw&usqp=CAU"/>
            </Link>

            <Link to="/facebook">
                <img onClick={handleFbClick}   className="fbLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-TNGkP2z9MW5mV_i2QJsFfO3fxkzPZdieA&usqp=CAU" />
            </Link>

        </div>

    )
}


