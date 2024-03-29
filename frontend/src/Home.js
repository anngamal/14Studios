import background3 from "./Images/background3.jpg"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo3 from "./Images/logo3.png"
import mainBanner from "./mainBanner.jpg";
import React, { useState, useEffect } from 'react';
import pckage from"./Images/pckage.jpg";
import studio14 from "./Images/studio14two.png"
import axios from 'axios';
import packag from "./Images/package.png"
import logo from "./Images/logo.avif"
import brandidentitiy from "./Images//brandIndentity.jpg"
import foodBev from "./Images/foodBev.jpg"
import restDesign from "./Images/restDesign.jpg"
import webdesign from "./Images/webdesign.avif"


export default function Home() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [services, setServices] = useState([]);
    const [categoryServices, setCategoryServices] = useState([]);
   

    useEffect(() => {
        axios.get('/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);



    const handleCategoryClick = (categoryId) => {
        axios.get(`/category/${categoryId}/services`)
            .then(response => {
                setServices(response.data);
                setSelectedCategory(categoryId);
            })
            .catch(error => console.error('Error fetching services:', error));
    };


    

    useEffect(() => {
        axios.get('/categories')
          .then(response => {
            setCategories(response.data);
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
      }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of slides to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust the autoplay speed in milliseconds
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="mainBannerDiv">
                <img className="mainBannerImg" src={background3} />
                <h2 className="mainBannerh2">Where Imagination Meets Precision : Studio 14</h2>
                <Link to="/service" className="mainBannerButton">Learn More</Link>
            </div>
            <div className="partnershipHomeDiv">
                <Slider {...settings}>
                    <div>
                        <img className="sliderLogo" src={logo3} alt="Logo 1" />
                    </div>
                    <div>
                        <img className="sliderLogo" src={logo3} alt="Logo 2" />
                    </div>
                    <div>
                        <img className="sliderLogo" src={logo3} alt="Logo 3" />
                    </div>
                    <div>
                        <img className="sliderLogo" src={logo3} alt="Logo 4" />
                    </div>
                    <div>
                        <img className="sliderLogo" src={logo3} alt="Logo 5" />
                    </div>

                </Slider>
            </div>

            <div className="container">
                <div className="content">
                    <div className="notJustALogoMainDiv">
                        <img className="notJustALogoImg" src={mainBanner} alt="Main Banner" />
                        <div className="notJustALogoContent">
                            <h1 className="notJustALogoH1">Not Just A Pretty Logo</h1>
                            <p className="notJustALogoP">Brands aren't made with just a logo. With comprehensive brand kits and guidelines,</p>
                            <p className="notJustALogoP"> brands are set up for success and with an identity built for growth.
                            </p>
                            <Link className="notJustALogoLink" to="/contactus">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="notJustALogoMainDiv">

                        <div className="notJustALogoContent">
                            <h1 className="packagedesignH1">Special Packaging Design</h1>
                            <p className="notJustALogoP">Retain brand recognition & Keep your identity</p>
                            <p className="notJustALogoP"> Lean into your history. Don't turn your back on who you are, but instead to lean in. 
                            </p>
                            <Link className="notJustALogoLink" to="/contactus">Contact Us</Link>
                        </div>
                        <img className="notJustALogoImg" src={pckage} alt="Package" />
                    </div>
                </div>
            </div>

         <div className="categoriesContainer">
                <div className="whiteCategoriesDiv">
                    <h2 className="categoriesH2">Categories</h2>
                </div>
             <ul className="categoriesGrid">
                
                <li className="categoryHomeLi" >
                <Link className="catLink" to="/packages">
           <img  className="categoryHomeImg" src={packag} alt="Description of the image"/>
           <span className="categoryName">Pacakges</span>
          
             </Link>
            </li>

            <li className="categoryHomeLi" >
             <Link className="catLink" to="/logos">
           <img  className="categoryHomeImg" src={logo} alt="Description of the image"/>
           <span className="categoryName">LOGOS</span>
             </Link>
             </li>

             <li className="categoryHomeLi" >
             <Link  className="catLink" to="/webdesigns">
           <img  className="categoryHomeImg" src={webdesign} alt="Description of the image"/>
           <span className="categoryName">WEB DESIGNS</span>
             </Link>
             </li>

             <li className="categoryHomeLi" >
             <Link className="catLink"   to="/restaurantdesigns">
           <img  className="categoryHomeImg" src={restDesign} alt="Description of the image"/>
           <span className="categoryName">RESTAURANT DESIGNS</span>
             </Link>
             </li>

             <li className="categoryHomeLi" >
             <Link className="catLink" to="/foodandbeverage">
           <img  className="categoryHomeImg" src={foodBev} alt="Description of the image"/>
           <span className="categoryName">FOOD & BEVERAGE</span>
             </Link>
             </li>

             <li className="categoryHomeLi" >
             <Link className="catLink"  to="/brandidentity">
           <img  className="categoryHomeImg" src={brandidentitiy} alt="Description of the image"/>
           <span className="categoryName">BRAND IDENTITY</span>
             </Link>
                </li>
           
        </ul>
        

         </div>
    
        

            {/* Display services based on selected category */}
            {selectedCategory && (
                <div>
                    <h2 className="categoryDetailsH2">Services for Category {selectedCategory}</h2>
                    <ul>
                        {services.map(service => (
                            <li key={service.id}>
                                <strong className="categoryNameDescriptionStrong">{service.name}</strong>: {service.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="lastDivHome">
                <h2 className="lastH2Home">Do You Need Help ? We Are Always Here To Help. </h2>
            </div>

            <div class="studio14Container">
                <img class="studio14Img" src={studio14} alt="Studio14" />
                <div class="studio14Content">
                    <h2 class="studio14H2">Welcome to Studio 14 - Where Creativity Meets Design Excellence</h2>
                    <p class="studio14P">At Studio 14, we're more than just graphic designers – we're storytellers, problem solvers, and visionaries.</p>
                    <p class="studio14P">With a decade of experience, we craft designs that inspire and resonate. From branding to digital graphics.</p>
                    <p class="studio14P"> we're here to bring your vision to life with creativity and excellence. </p>
                    <p class="studio14P">Let's create something extraordinary together.</p>
                <div className="studio14ContactUsButtonDiv">
                    <Link className="studio14ContactUsButton" to="/contactus">Contact Us</Link>
                </div>
                </div>
            </div>
          

        </div>
        
    );
}
