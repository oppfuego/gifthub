import PropTypes from "prop-types";
import "./ResponsiveNavbar.css";
import {Link} from "react-router-dom";

const ResponsiveNavbar = ({ className = "" }) => {
  return (
    <header className={`responsive-navbar ${className}`}>
      <div className="hero-image-container-parent">
        <Link to="/" className="hero-image-container">

          <img
            className="hero-image-container-child"
            loading="lazy"
            alt=""
            src="/group-1000006279@2x.png"
          />
          <img
            className="gifthub-icon1"
            loading="lazy"
            alt=""
            src="/gifthub.svg"
          />
        </Link>
        <nav className="hero-links">
          <Link to="/product-listings" className="item-link-check-balance-wrapper">
            <div className="item-link">Gift cards</div>
          </Link>
          <div className="item-link-check-balance-container">
            <div className="item-link1">Game Credits</div>
          </div>
            <Link to="/account" className="item-link-check-balance-frame">
            <div className="item-link2">My Account</div>
            </Link>
            <Link to="/checkout" className="item-link-check-balance-wrapper1">
            <div className="item-link3">Checkout</div>
                </Link>
        </nav>
      </div>
      <Link to="/cart-details-1920" className="responsive-navbar-inner">
        <div className="icon-parent">
          <img className="icon" loading="lazy" alt="" src="/icon.svg" />
          <div className="paragraphbackground">
            <div className="hero-title">0</div>
            <div className="items">items</div>
          </div>
        </div>
        </Link>
    </header>
  );
};

ResponsiveNavbar.propTypes = {
  className: PropTypes.string,
};

export default ResponsiveNavbar;
