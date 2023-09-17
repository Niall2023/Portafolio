import {AiFillFilePpt} from '@react-icons/all-files/ai/AiFillFilePpt'
import logo from  '../assets/logo.png';
const Navbar = () => {
    return ( <nav className="navbar">
        <a href= "" className="message">
            <div className="message-icon-container">
                <AiFillFilePpt className="message-i"/>

            </div>
            <p>Mi portarolio</p>
        </a>
        <u className="menu">

            <li>
            <a href="https://www.instagram.com/sergio.quintero.24/">Instragram&nbsp;&nbsp;</a>
            </li>
            <li>
            <a href="https://github.com/Niall2023">Git Hub&nbsp;&nbsp;</a>
            </li>
            <li>
            <a href="https://www.facebook.com/sergio.quintero.359126">Facebook&nbsp;&nbsp;</a>
            </li>
            

            <img src={logo} alt="logo" className='logo'/>
            




        
            

        </u>
    </nav> );
}
export default Navbar;

