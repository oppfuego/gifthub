import PropTypes from "prop-types";
import "./ResponsiveNavbar1.css";

const ResponsiveNavbar1 = ({ className = "" }) => {
  return (
    <header className={`responsive-navbar1 ${className}`}>
      <div className="navbar-container">
        <div className="navbar-links-container">
          <img
            className="navbar-links-container-child"
            loading="lazy"
            alt=""
            src="/group-1000006279@2x.png"
          />
          <img
            className="gifthub-icon3"
            loading="lazy"
            alt=""
            src="/gifthub.svg"
          />
        </div>
        <nav className="nav-links">
          <div className="links-list">
            <div className="item-link4">Gift cards</div>
          </div>
          <div className="links-list1">
            <div className="item-link5">Game Credits</div>
          </div>
          <div className="links-list2">
            <div className="item-link6">My Account</div>
          </div>
          <div className="links-list3">
            <div className="item-link7">Checkout</div>
          </div>
        </nav>
      </div>
      <div className="user-profile">
        <div className="icon-group">
          <img className="icon1" alt="" src="/icon.svg" />
          <div className="paragraphbackground1">
            <div className="user-name-placeholder">0</div>
            <div className="items1">items</div>
          </div>
        </div>
      </div>
    </header>
  );
};

ResponsiveNavbar1.propTypes = {
  className: PropTypes.string,
};

export default ResponsiveNavbar1;
