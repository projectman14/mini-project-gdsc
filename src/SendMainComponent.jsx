import './SendMailComponent.css';
import SendBtn from './assets/SendBtn.png';
import TextField from '@mui/material/TextField';
import Designs from './assets/Designs.svg';

export default function SendMailComponent() {
    return (
        <div className='SendMailMainComponent'>
            <div className='SendMailComponent'>
                <img className='SendBtn' src={SendBtn}></img>
                <p className='SubscribeHeadLine'>Subscribe to get information, latest news and other interesting offers about Cobham</p>
                <div className='EmailInput'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <button className='SubscribeBtn'>Subscribe</button>
                </div>
                <div className='DesignDiv'>
                    <img src={Designs} className='DesignImgs' ></img>
                </div>
            </div>
        </div>
    );
}