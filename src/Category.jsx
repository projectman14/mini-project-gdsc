import './Category.css';
import Satalite from './assets/Satelite.svg';
import Settings from './assets/Settings.svg';
import Mice from './assets/Mice.svg';
import Flight from './assets/Flight.svg';
import Cards from './Cards';
import AddDesign from './assets/Designs.svg';

export default function Category() {
    return (
        <div>
            <div className='Category'>
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