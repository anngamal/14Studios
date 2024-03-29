import { Link } from "react-router-dom";
import packag from "./Images/package.png"
import logo from "./Images/logo.avif"
import brandidentitiy from "./Images//brandIndentity.jpg"
import foodBev from "./Images/foodBev.jpg"
import restDesign from "./Images/restDesign.jpg"
import webdesign from "./Images/webdesign.avif"
export default function Portfolio(){
    return(
    <div>
        <div>
            <h2>.</h2>
        </div>

        
        <div className="categoriesContainer">
                <div className="whiteCategoriesDiv">
                    <h2 className="categoriesH2">Categories</h2>
                </div>
             <ul className="categoriesGrid">
                
                <li className="categoryHomeLi" >
                <Link className="catLink" to="/packages">
           <img  className="categoryHomeImg" src={packag} alt="Description of the image"/>
           <span className="categoryName">Pacakge</span>
          
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
    </div>
    )
}