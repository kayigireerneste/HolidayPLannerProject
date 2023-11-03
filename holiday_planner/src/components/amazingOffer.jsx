import "../css/amazingOffer.css"
import OfferImage1 from "../images/OfferImage1.jpg"
import OfferImage2 from "../images/OfferImage2.jpg"
import OfferImage3 from "../images/OfferImage3.jpg"



const AmazingOffer = () => {
    return ( 
        <div className="amazingOffer_content">
            <div className="headerOffer_title">
                <div className="header_title">
                    <h1 className="Offer_title">Amazing Offers</h1>
                    <h3 className="SubOffer_title">Special <strong>Deals</strong> And Last Minute <br /> <strong>Amazing Offers</strong></h3>
                </div>
                <div className="next_prev">
                    <button className="previous">Prev</button>
                    <button className="nextOffer">Next</button>
                </div>
            </div>
            <div className="Offers_container">
                <div className="Offers">
                    <div className="offer_image">
                        <div className="OfferDegre">32% off</div>
                        <img className="main_image" src={OfferImage1} alt="offers image" />
                    </div>
                    <div className="offerplace">
                        <h4 className="places">Venice, Italy</h4>
                        <button className="OfferAmount">$2700</button>
                    </div>
                </div>
                <div className="Offers">
                    <div className="offer_image">
                        <div className="OfferDegre">39% off</div>
                        <img className="main_image" src={OfferImage2} alt="offers image" />
                    </div>
                    <div className="offerplace">
                        <h4 className="places">Great Ocean Road, Australia</h4>
                        <button className="OfferAmount">$3300</button>
                    </div>
                </div>
                <div className="Offers">
                    <div className="offer_image">
                        <div className="OfferDegre">12% off</div>
                        <img className="main_image" src={OfferImage3} alt="offers image" />
                    </div>
                    <div className="offerplace">
                        <h4 className="places">Machu Picchu</h4>
                        <button className="OfferAmount">$5000</button>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default AmazingOffer;