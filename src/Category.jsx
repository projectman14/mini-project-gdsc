import './Category.css';
import Satalite from './assets/Satelite.svg';
import Settings from './assets/Settings.svg';
import Mice from './assets/Mice.svg';
import Flight from './assets/Flight.svg';
import Cards from './Cards';
import AddDesign from './assets/Designs.svg';
import { useInView } from 'react-intersection-observer';

export default function Category() {
    const { ref: myRef1, inView: myElementIsVisible1 } = useInView({ triggerOnce: true,});
    console.log(myElementIsVisible1);

    const animateStyle = {
        opacity: myElementIsVisible1 ? 1 : 0,
        filter: myElementIsVisible1 ? 'blur(0)' : 'blur(5px)',
        transform: myElementIsVisible1 ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'all 1s',
      };

    return (
        <div >
            <div ref={myRef1} className={`Category`} style={animateStyle}>
                <p className="CategoryHeadLine">CATEGORY</p>
                <p className="CategoryMainLine">We Offer Best Services</p>
                <div className='DisplayCards'>
                    <Cards imgUrl={Satalite} HeadLine="Calculated Weather " MainLine="Built Wicket longer admire do barton vanity itself do in it." />
                    <Cards imgUrl={Flight} HeadLine="Calculated Weather " MainLine="Built Wicket longer admire do barton vanity itself do in it." />
                    <Cards imgUrl={Mice} HeadLine="Calculated Weather " MainLine="Built Wicket longer admire do barton vanity itself do in it." />
                    <Cards imgUrl={Settings} HeadLine="Calculated Weather " MainLine="Built Wicket longer admire do barton vanity itself do in it." />
                </div>
            </div>
            <div>
                <img className='AddDesignTask' src={AddDesign} alt="Hi" />
            </div>
        </div>
    );
}