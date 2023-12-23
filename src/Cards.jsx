import './Cards.css';
import HoverEff from './assets/HoverEffectCard.svg';

export default function Cards({ imgUrl, HeadLine, MainLine }) {
    return (
        <div>
            <div className="Cards">
                <img className='CardImg' src={imgUrl} alt="Pic"></img>
                <p className='CardHeadLine'>{HeadLine}</p>
                <p className='CardMainLine'>{MainLine}</p>
            </div>
            <img className='HoverEff' src={HoverEff}></img>
        </div>
    );
}