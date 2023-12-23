import './Travelprocess.css';
import ChoseDesti from './assets/DestinationChoose.svg';
import MakePayment from './assets/MakePayment.svg';
import Transport from './assets/Transport.svg';
import Progess from './assets/Progess.svg';

export default function TravelProcess() {
    return (
        <div className='TravelProcess'>
            <div className='Steps'>
                <p className='TravelProcessHeadLine'>Easy and Fast</p>
                <p className='TravelProcessMainLine1'>Book Your Next Trip</p>
                <p className='TravelProcessMainLine2'>In 3 Easy Setps</p>
                <div className='ChooseDestination'>
                    <img className='ChooseDestinationImg' src={ChoseDesti}></img>
                    <div className='ChooseDestinationContent'>
                        <p className='ChooseDestinationContentHead'>Choose Destination</p>
                        <p className='ChooseDestinationContentMain'>Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>
                <div className='MakePayment'>
                    <img className='MakePaymentImg' src={MakePayment}></img>
                    <div className='MakePaymentContent'>
                        <p className='MakePaymentContentHead'>Make Payment</p>
                        <p className='MakePaymentContentMain'>Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>
                <div className='Transport'>
                    <img className='TransportImg' src={Transport}></img>
                    <div className='TransportContent'>
                        <p className='TransportContentHead'>Choose Destination</p>
                        <p className='TransportContentMain'>Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>
            </div>
            <div className='ImgDivOfProcess'>
                <img className='ProgessImg' src={Progess}></img>
            </div>
        </div>
    );
}