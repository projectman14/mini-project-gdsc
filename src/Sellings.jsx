import DestinationCard from './DestinationCard';
import './Sellings.css';
import London from './assets/London.png';
import Italy from './assets/Italy.png';
import Europe from './assets/Europe.png';
import Spring from './assets/SpringDesign.svg';

export default function Sellings() {

    let values = [{ img: Italy, place: "Rome,Italy", price: "$5.42k", duration: "10" }, { img: London, place: "London,UK", price: "$4.2k", duration: "12" }, { img: Europe, place: "Full Europe", price: "$15k", duration: "28" }];

    return (
        <div className='SellingsMain'>
            <div className='Sellings'>
                <p className='SellingHeadLine'>Top Selling</p>
                <p className='SellingMainLine'>Top Destinations</p>
            </div>
            <div className='DestinationCardStyle'>
                <DestinationCard imge={values[0].img} place={values[0].place} price={values[0].price} duration={values[0].duration} />
                <DestinationCard imge={values[1].img} place={values[1].place} price={values[1].price} duration={values[1].duration} />
                <DestinationCard imge={values[2].img} place={values[2].place} price={values[2].price} duration={values[2].duration} />
                <img className='SpringImg' src={Spring}></img>
            </div>
        </div>
    );
}