import { NavLink } from "react-router-dom";
import './index.css';

export default function Navbar() {
    return (
        <nav>
            <ul className="navUl">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                <li><NavLink to="/service" activeClassName="active">Service</NavLink></li>
                <li><NavLink to="/contactus" activeClassName="active">Contact Us</NavLink></li>
                

            </ul>
        </nav>
    );
}