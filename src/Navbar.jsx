import './Navbar.css';
import Logo from './assets/Logo.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className="Components">
                <p>Destinations</p>
                <p>Hotels</p>
                <p>Flights</p>
                <p>Bookings</p>
                <p>Login</p>
                <p>Sign Up</p>
                <p>EN<KeyboardArrowDownIcon className='keyDown'/></p>
            </div>
        </div>
    );
}