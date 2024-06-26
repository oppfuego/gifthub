import { Button } from "@mui/material";
import CartItemDetails from "./CartItemDetails";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`cart-item-parent ${className}`}>
      <div className="cart-item">
        <div className="header">
          <div className="header-child" />
          <div className="header-items">
            <div className="product3">Product</div>
          </div>
          <div className="header-items1">
            <div className="price">Price</div>
          </div>
          <div className="quantity1">Quantity</div>
          <div className="total">Total</div>
        </div>
        <CartItemDetails
          itemBackgrounds="/rectangle-4555@2x.png"
          discount20OFF="Discount: 20% OFF"
        />
        <CartItemDetails
          itemBackgrounds="/rectangle-4554@2x.png"
          discount20OFF="Worth USD $400"
        />
        <CartItemDetails
          itemBackgrounds="/rectangle-4555@2x.png"
          discount20OFF="Worth USD $400"
        />
        <div className="cart-actions">
          <Button
            className="button13"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#0a0a60",
              fontSize: "18",
              borderColor: "#0a0a60",
              borderRadius: "4px",
              "&:hover": { borderColor: "#0a0a60" },
              width: 129,
              height: 54,
            }}
          >
            Go Back
          </Button>
          <Button
            className="button14"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#0a0a60",
              borderRadius: "4px",
              "&:hover": { background: "#0a0a60" },
              width: 141,
              height: 54,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
      <div className="checkout-details">
        <div className="header-wrapper">
          <div className="header1">
            <p className="checkout-details1">Checkout Details</p>
          </div>
        </div>
        <div className="checkout-summary">
          <div className="totals">
            <div className="cart-subtotal">Cart Subtotal</div>
            <div className="total-placeholder">$360.00</div>
          </div>
        </div>
        <div className="tax-details-wrapper">
          <div className="tax-details">
            <div className="tax-labels">
              <div className="shipping-handling">{`Shipping & Handling`}</div>
              <div className="other-taxes">Other Taxes</div>
            </div>
            <div className="tax-labels1">
              <div className="div41">$0.00</div>
              <div className="div42">$0.00</div>
            </div>
          </div>
        </div>
        <div className="tax-divider-wrapper">
          <div className="tax-divider" />
        </div>
        <div className="checkout-summary1">
          <div className="grand-total-parent">
            <div className="grand-total">Grand Total</div>
            <div className="div43">$360.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
