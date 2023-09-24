import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="flex-1">
                    <a className="text-xl"><button><img src="https://i.ibb.co/W5HywfG/Logo.png"/></button></a>
                </div>
                <div className="flex-none">
                    <ul className="flex items-center gap-6 px-1 text-2xl">
                        <li className="navitem"><NavLink to="/">Home</NavLink></li>
                        <li className="navitem"><NavLink to="/donation">Donation</NavLink></li>
                        <li className="navitem"><NavLink to="/statistics">Statistics</NavLink></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;