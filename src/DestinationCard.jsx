import NearMeIcon from '@mui/icons-material/NearMe';
import './DestinationCard.css';

export default function DestinationCard({imge,place,price,duration}) {
    return (
        <div className='DestinationCard'>
            <img className='DestinationImage' src={imge}></img>
            <div className='Taging'>
                <p className='DestinationPlace'>{place}</p>
                <p className='DestinationPrice'>{price}</p>
            </div>
            <div className='CardLine'>
                <NearMeIcon fontSize='small'></NearMeIcon>
                <p className='DaysLine'>{duration} Days Trip</p>
            </div>
        </div>
    );
}