import './CustomerReview.css';
import ReviewCard from './ReviewCard';
import company1 from './assets/company1.png'; 
import company2 from './assets/company2.png'; 
import company3 from './assets/company3.png'; 
import company4 from './assets/company4.png'; 
import company5 from './assets/company5.png'; 

export default function CustomerReview() {
    return (
        <div className='CustomerReviewWithCompany'>
            <div className='CustomerReview'>
                <div className='CustomerReviewHeadingMain'>
                    <p className='CustomerReviewHead'>TESTIMONIALS</p>
                    <p className='CustomerReviewMain1'>What People Say</p>
                    <p className='CustomerReviewMain2'>About Us</p>
                </div>
                <div className='ReviewCardBoxs'>
                    <ReviewCard />
                </div>
            </div>
            <div className='Companys'>
                <img src={company1} className='CompanyImg1'></img>
                <img src={company2} className='CompanyImg2'></img>
                <img src={company3} className='CompanyImg3'></img>
                <img src={company4} className='CompanyImg4'></img>
                <img src={company5} className='CompanyImg5'></img>
            </div>
        </div>
    );
}