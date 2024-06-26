import Item1 from "./Item1";
import PropTypes from "prop-types";
import "./Section.css";
import {Link} from "react-router-dom";

const Section = ({className = ""}) => {
    return (
        <section className={`section1 ${className}`}>
            <div className="best-selling-title">
                <h1 className="heading-28">Best Selling Cards</h1>
            </div>
            <div className="best-selling-cards">
                <div className="container4">
                    <Link to="/product-description" className="product-desc-cont">
                    <Item1

                        linkGooglePlayCardjpg="/link--googleplaycardjpg@2x.png"
                        heading2GooglePlayGiftCar="Google Play Gift card"

                        imgRated500OutOf5="/img--rated-500-out-of-5.svg"
                        prop="$12.97 – $106.97"
                        />
                    </Link>

                    <Link to="/product-description" className="product-desc-cont">
                    <Item1
                        linkGooglePlayCardjpg="/link--netflixgiftcard300x300jpg@2x.png"
                        heading2GooglePlayGiftCar="Netflix Gift Card"
                        imgRated500OutOf5="/img--rated-500-out-of-5.svg"
                        prop="$18.49 – $107.97"
                    />
                    </Link>

                    <Link to="/product-description" className="product-desc-cont">
                    <Item1
                        linkGooglePlayCardjpg="/link--amazongiftcard300x300jpg@2x.png"
                        heading2GooglePlayGiftCar="Amazon Gift Card"
                        imgRated500OutOf5="/img--rated-500-out-of-5-2.svg"
                        prop="$12.95 – $112.95"
                    />
                    </Link>

                    <Link to="/product-description" className="product-desc-cont">
                    <Item1
                        linkGooglePlayCardjpg="/link--visavanillagiftcard300x300png@2x.png"
                        heading2GooglePlayGiftCar="Visa Vanilla Gift Card"
                        imgRated500OutOf5="/img--rated-500-out-of-5.svg"
                        prop="$33.97 – $114.97"
                    />
                    </Link>
                </div>
                <div className="best-selling-button">
                    <div className="button-parent">
                        <div className="button6"/>
                        <div className="button7"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

Section.propTypes = {
    className: PropTypes.string,
};

export default Section;
