import { Link } from "react-router-dom";
import studio14 from "./Images/studio14two.png"
import logogif from "./Images/logogif.gif"
import brandidentitygif from "./Images/brandidentitygif.gif"
import packagegif from "./Images/packagegif.gif"
import webdesigngif from "./Images/webdesigngif.gif"
export default function Service(){
    return(
        <div>
            <div>
                <h2>.</h2>
            </div>
            <div className="whiteCategoriesDiv">
                <h2 className="serviceH2"> Explore the roadmap of our service journey, 
                designed to meet your needs at every turn.</h2>
            </div>
            <div class="studio14Container">
                <img class="studio14Img" src={logogif} alt="Studio14" />
                <div class="servicePContent">
                    <h2 class="serviceBoxH2">Let's Create Your Unique LOGO</h2>
                    <p class="serviceP">At Studio 14, we're more than just graphic designers – we're storytellers, problem solvers, and visionaries.</p>
                    <p class="serviceP">With a decade of experience, we craft designs that inspire and resonate. From branding to digital graphics.</p>
                    <p class="serviceP"> we're here to bring your vision to life with creativity and excellence. </p>
                    <p class="serviceP">Let's create something extraordinary together.</p>
                </div>
                <div className="serviceRequestQuoteButtonDiv">
                    <Link className="requestAQuoteButton" to="/contactus">Request A Quote</Link>
                </div>
            </div>

            <h2 className="arrowDownH2">↓</h2>

            <div class="studio14Container">
                
                <div class="servicePContent">
                    <h2 class="servicebrandIdentityH2">Transform Your BRAND IDENTITY into an Unforgettable Masterpiece</h2>
                    <p class="serviceP">At Studio 14, we're more than just graphic designers – we're storytellers, problem solvers, and visionaries.</p>
                    <p class="serviceP">With a decade of experience, we craft designs that inspire and resonate. From branding to digital graphics.</p>
                    <p class="serviceP"> we're here to bring your vision to life with creativity and excellence. </p>
                    <p class="serviceP">Let's create something extraordinary together.</p>
                </div>
                <div className="serviceRequestQuoteButtonDiv">
                    <Link className="requestAQuoteLeftButton" to="/contactus">Request A Quote</Link>
                </div>
                <img class="studio14Img" src={brandidentitygif} alt="Studio14" />
            </div>
            <h2 className="arrowDownH2">↓</h2>

            <div class="studio14Container">
                <img class="studio14Img" src={packagegif} alt="Studio14" />
                <div class="servicePContent">
                    <h2 class="serviceBoxH2">Elevate Your Product's Presence with Distinctive Packaging Designs</h2>
                    <p class="serviceP">At Studio 14, we're more than just graphic designers – we're storytellers, problem solvers, and visionaries.</p>
                    <p class="serviceP">With a decade of experience, we craft designs that inspire and resonate. From branding to digital graphics.</p>
                    <p class="serviceP"> we're here to bring your vision to life with creativity and excellence. </p>
                    <p class="serviceP">Let's create something extraordinary together.</p>
                </div>
                <div className="serviceRequestQuoteButtonDiv">
                    <Link className="requestAQuoteButton" to="/contactus">Request A Quote</Link>
                </div>
            </div>
            <h2 className="arrowDownH2">↓</h2>

            <div class="studio14Container">
                
                <div class="servicePContent">
                    <h2 class="servicebrandIdentityH2">Transform Your BRAND IDENTITY into an Unforgettable Masterpiece</h2>
                    <p class="serviceP">At Studio 14, we're more than just graphic designers – we're storytellers, problem solvers, and visionaries.</p>
                    <p class="serviceP">With a decade of experience, we craft designs that inspire and resonate. From branding to digital graphics.</p>
                    <p class="serviceP"> we're here to bring your vision to life with creativity and excellence. </p>
                    <p class="serviceP">Let's create something extraordinary together.</p>
                </div>
                <div className="serviceRequestQuoteButtonDiv">
                    <Link className="requestAQuoteLeftButton" to="/contactus">Request A Quote</Link>
                </div>
                <img class="studio14Img" src={webdesigngif} alt="Studio14" />
            </div>
            <h2 className="arrowDownH2">↓</h2>

            <div class="studio14Container">
                <img class="studio14Img" src={logogif} alt="Studio14" />
                <div class="servicePContent">
                    <h2 class="serviceBoxH2">Let's Create Your Unique Logo</h2>
                    <p class="serviceP">At Studio 14, we're more than just graphic designers – we're storytellers, problem solvers, and visionaries.</p>
                    <p class="serviceP">With a decade of experience, we craft designs that inspire and resonate. From branding to digital graphics.</p>
                    <p class="serviceP"> we're here to bring your vision to life with creativity and excellence. </p>
                    <p class="serviceP">Let's create something extraordinary together.</p>
                </div>
                <div className="serviceRequestQuoteButtonDiv">
                    <Link className="requestAQuoteButton" to="/contactus">Request A Quote</Link>
                </div>
            </div>
            <h2 className="arrowDownH2">↓</h2>


            <div class="studio14Container">
                
                <div class="servicePContent">
                    <h2 class="servicebrandIdentityH2">Transform Your BRAND IDENTITY into an Unforgettable Masterpiece</h2>
                    <p class="serviceP">At Studio 14, we're more than just graphic designers – we're storytellers, problem solvers, and visionaries.</p>
                    <p class="serviceP">With a decade of experience, we craft designs that inspire and resonate. From branding to digital graphics.</p>
                    <p class="serviceP"> we're here to bring your vision to life with creativity and excellence. </p>
                    <p class="serviceP">Let's create something extraordinary together.</p>
                </div>
                <div className="serviceRequestQuoteButtonDiv">
                    <Link className="requestAQuoteLeftButton" to="/contactus">Request A Quote</Link>
                </div>
                <img class="studio14Img" src={brandidentitygif} alt="Studio14" />
            </div>
        </div>
    )
}