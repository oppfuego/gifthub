import PropTypes from "prop-types";
import "./Component1.css";

const Component1 = ({ className = "", group1000006279 }) => {
  return (
    <footer className={`component-72 ${className}`}>
      <div className="footer-links-container">
        <div className="links-wrapper">
          <div className="brand-footer">
            <img className="brand-footer-child" alt="" src={group1000006279} />
            <img className="gifthub-icon4" alt="" src="/gifthub-1.svg" />
          </div>
          <div className="copyright">
            <h3 className="about4">About</h3>
            <div className="about5">About</div>
            <div className="faq2">FAQ</div>
            <div className="contact2">Contact</div>
            <div className="press2">Press</div>
            <div className="reviews2">Reviews</div>
          </div>
          <div className="link-columns">
            <h3 className="product2">Product</h3>
            <div className="businesses2">Businesses</div>
            <div className="gift-card-incentives2">Gift Card Incentives</div>
          </div>
          <div className="link-columns1">
            <h3 className="legal2">Legal</h3>
            <div className="site-terms2">Site Terms</div>
            <div className="privacy2">Privacy</div>
          </div>
          <div className="link-columns2">
            <h3 className="use-gifthub2">Use Gifthub</h3>
            <div className="how-it-works2">How it works</div>
            <div className="why-us2">Why Us?</div>
            <div className="redeem2">Redeem</div>
          </div>
          <div className="link-columns3">
            <h3 className="other-stuff2">Other stuff</h3>
            <div className="blog2">Blog</div>
            <div className="gift-card-worth2">Gift Card Worth</div>
            <div className="sitemap2">Sitemap</div>
          </div>
        </div>
        <div className="categories2">
          <div className="categories3">Categories</div>
          <div className="restaurants-bars-spas-shopping2">{`Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
        </div>
      </div>
    </footer>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
  group1000006279: PropTypes.string,
};

export default Component1;
