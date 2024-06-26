import PropTypes from "prop-types";
import "./ResponsiveNavbar2.css";

const ResponsiveNavbar2 = ({ className = "" }) => {
  return (
    <header className={`responsive-navbar2 ${className}`}>
      <div className="frame-parent9">
        <div className="frame-parent10">
          <img
            className="frame-item"
            loading="lazy"
            alt=""
            src="/group-1000006279@2x.png"
          />
          <img
            className="gifthub-icon5"
            loading="lazy"
            alt=""
            src="/gifthub.svg"
          />
        </div>
        <nav className="links-parent">
          <div className="links">
            <div className="item-link12">Gift cards</div>
          </div>
          <div className="links1">
            <div className="item-link13">Game Credits</div>
          </div>
          <div className="links2">
            <div className="item-link14">My Account</div>
          </div>
          <div className="links3">
            <div className="item-link15">Checkout</div>
          </div>
        </nav>
      </div>
      <div className="responsive-navbar-child">
        <div className="group-div">
          <img className="icon5" loading="lazy" alt="" src="/icon.svg" />
          <div className="paragraphbackground2">
            <div className="notification-placeholder">0</div>
            <div className="items2">items</div>
          </div>
        </div>
      </div>
    </header>
  );
};

ResponsiveNavbar2.propTypes = {
  className: PropTypes.string,
};

export default ResponsiveNavbar2;
