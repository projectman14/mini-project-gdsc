import './ReviewCard.css';
import ReviewerImage from './assets/ReviewerImage.svg';

export default function ReviewCard() {
    return (
        <div className='ReviewCardMain'>
            <img className='ReviewerImage' src={ReviewerImage}></img>
            <div className="ReviewBox">
                <p className="ReviewComment">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                <p className="ReviewerName">Mike taylor</p>
                <p className="ReviewerLocation">Rajasthan,India</p>
            </div>
            <div className="ReviewBox2">
                <p className="ReviewerName">Mike taylor</p>
                <p className="ReviewerLocation">Rajasthan,India</p>
            </div>
        </div>
    );
}