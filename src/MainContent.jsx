import './MainContent.css';
import MainLineUnder from './assets/MainLineUnder.svg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function MainContent() {
    return (
        <>
            <div className="MainContent">
                <p className="HeadLine">BEST DESTINATIONS AROUND THE WORLD</p>
                <p className='MainLine'> Travel, enjoy<br></br>
                    and live a new<br></br>
                    and full life
                </p>
                <p className='MainEndLine'>Built Wicket longer admire do barton vanity itself do in <br></br>it. Preferred to sportsmen it engrossed listening. Park <br></br>gate  sell they west hard for the.</p>
                <button className='MainContentButton'>Find out more</button>
                <button className='MainContentButtonRed'><PlayArrowIcon/></button>
            </div>
            <div>
                <img className='MainUnderLine' src={MainLineUnder}></img>
            </div>
        </>
    );
}