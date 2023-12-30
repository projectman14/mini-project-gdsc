import './MainContent.css';
import MainLineUnder from './assets/MainLineUnder.svg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useInView } from 'react-intersection-observer';

export default function MainContent() {
    const { ref: myRef, inView: myElementIsVisible} = useInView({ triggerOnce: true,});

    const animateStyle = {
        opacity: myElementIsVisible ? 1 : 0,
        filter: myElementIsVisible ? 'blur(0)' : 'blur(5px)',
        transform: myElementIsVisible ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'all 1s',
      };

    return (
        <>
            <div className="MainContent" ref={myRef} style={animateStyle}>
                <p className="HeadLine">BEST DESTINATIONS AROUND THE WORLD</p>
                <p className='MainLine'> Travel, enjoy<br></br>
                    and live a new<br></br>
                    and full life
                </p>
                <p className='MainEndLine'>Built Wicket longer admire do barton vanity itself do in <br></br>it. Preferred to sportsmen it engrossed listening. Park <br></br>gate  sell they west hard for the.</p>
                <button className='MainContentButton'>Find out more</button>
                <button className='MainContentButtonRed'><PlayArrowIcon/></button>
            </div>
            <div ref={myRef} style={animateStyle}>
                <img className='MainUnderLine' src={MainLineUnder}></img>
            </div>
        </>
    );
}