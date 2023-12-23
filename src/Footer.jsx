import './Footer.css';
import facebookLogo from './assets/facebook.svg';
import InstagramLogo from './assets/Instagram.png';
import xLogo from './assets/x.svg';
import Discover from './assets/Discover.svg';

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='footerpart1'>
                <p className="CompanyName">Jadoo.</p>
                <p className='BelowCompanyName'>Book your trip in minute, get full<br></br> Control for much longer.
                </p>
            </div>
            <div className='footerpart2'>
                <p className='footerCompany'>Company</p>
                <div className='footerpart2div'>
                    <p className='footerpart2opt'>About</p>
                    <p className='footerpart2opt'>Careers</p>
                    <p className='footerpart2opt'>Mobile</p>
                </div>
            </div>

            <div className='footerpart2'>
                <p className='footerCompany'>Contact</p>
                <div className='footerpart2div'>
                    <p className='footerpart2opt'>Help/FAQ</p>
                    <p className='footerpart2opt'>Press</p>
                    <p className='footerpart2opt'>Affilates</p>
                </div>
            </div>

            <div className='footerpart2'>
                <p className='footerCompany'>More</p>
                <div className='footerpart2div'>
                    <p className='footerpart2opt'>Airlinefees</p>
                    <p className='footerpart2opt'>Airline</p>
                    <p className='footerpart2opt'>Low fare tips</p>
                </div>
            </div>

            <div className='footerpart2'>
                <div className='socialHandels'>
                    <img className='Socials' src={facebookLogo}></img>
                    <img className='Socials' src={InstagramLogo}></img>
                    <img className='Socials' src={xLogo}></img>
                </div>
                <img className='Discover' src={Discover}></img>
            </div>
        </div>
    );
}