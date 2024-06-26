import PropTypes from "prop-types";
import "./Component.css";
import {Link} from "react-router-dom";

const Component = ({className = ""}) => {
    return (
        <footer className={`component-71 ${className}`}>
            <div className="footer-container">
                <div className="footer-logo-parent">
                    <div className="footer-logo">
                        <img
                            className="footer-logo-child"
                            alt=""
                            src="/group-1000006279-1@2x.png"
                        />
                        <img className="gifthub-icon2" alt="" src="/gifthub-1.svg"/>
                    </div>
                    <div className="footer-about">
                        <h3 className="about2">About</h3>
                        <div className="about3">About</div>
                        <div className="faq1">FAQ</div>
                        <div className="contact1">Contact</div>
                        <div className="press1">Press</div>
                        <div className="reviews1">Reviews</div>
                    </div>
                    <div className="product-parent">
                        <h3 className="product1">Product</h3>
                        <div className="businesses1">Businesses</div>
                        <div className="gift-card-incentives1">Gift Card Incentives</div>
                    </div>
                    <div className="legal-parent">
                        <h3 className="legal1">Legal</h3>
                        <Link to="/terms-conditions" className="site-terms1">Site Terms</Link>
                        <Link to="/privacy" className="privacy1">Privacy</Link>
                    </div>
                    <div className="use-gifthub-parent">
                        <h3 className="use-gifthub1">Use Gifthub</h3>
                        <div className="how-it-works1">How it works</div>
                        <div className="why-us1">Why Us?</div>
                        <div className="redeem1">Redeem</div>
                    </div>
                    <div className="other-stuff-parent">
                        <h3 className="other-stuff1">Other stuff</h3>
                        <div className="blog1">Blog</div>
                        <div className="gift-card-worth1">Gift Card Worth</div>
                        <div className="sitemap1">Sitemap</div>
                    </div>
                </div>
                <div className="footer-categories1">
                    <div className="categories1">Categories</div>
                    <div
                        className="restaurants-bars-spas-shopping1">{`Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
                </div>

                <div className="horizontal-line"></div>


                <div className="company-info">
                    <p>GalaxiCraft LLC</p>
                    <p>License number: 2325931</p>
                    <p>Sharjah Media City (Shams), Al Messaned, Al Bataeh, Sharjah, United Arab Emirates</p>
                </div>
            </div>
        </footer>
    );
};

Component.propTypes = {
    className: PropTypes.string,
};

export default Component;
