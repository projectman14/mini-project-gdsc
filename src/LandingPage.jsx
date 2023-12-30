import './LandingPage.css';
import MainContent from './MainContent';
import Navbar from './Navbar';
import Elipse from './assets/Elipse.svg';
import Plane from './assets/Lady.svg';
import BlurEffect from './assets/BlurEffect.png';

export default function LandingPage() {
    return (
        <div className={`Design`}>
            <img className='BlurEffect' src={BlurEffect}></img>
            <img className='BlurEffect' src={BlurEffect}></img>
            <Navbar />
            <img className='Decore' src={Elipse}></img>
            <img className='Plane' src={Plane}></img>
            <MainContent/>
        </div>
    );
}