import ResponsiveNavbar2 from "./ResponsiveNavbar2";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`responsive-navbar-parent ${className}`}>
      <div className="frame-wrapper">
        <div className="frame-wrapper1">
          <div className="frame-parent11">
            <div className="your-cart-wrapper">
              <h1 className="your-cart">Your Cart</h1>
            </div>
            <div className="view-or-edit">
              View or edit your cart before checkout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
