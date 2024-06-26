import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import "./BillingContainer.css";

const BillingContainer = ({ className = "" }) => {
  return (
    <div className={`billing-container ${className}`}>
      <form className="billing-form-container">
        <div className="billing-form">
          <h1 className="checkout1">Checkout</h1>
          <Button
            className="header"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#0a0a60",
              borderRadius: "5px",
              "&:hover": { background: "#0a0a60" },
              height: 54,
            }}
          >
            Billing Details
          </Button>
          <div className="form-field-block">
            <div className="row-1">
              <TextField
                className="block-1"
                placeholder="First Name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                  },
                  "& .MuiInputBase-input": { color: "#0a0a60" },
                }}
              />
              <TextField
                className="block-2"
                placeholder="Last Name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                  },
                  "& .MuiInputBase-input": { color: "#0a0a60" },
                }}
              />
            </div>
            <div className="row-2">
              <TextField
                className="block-11"
                placeholder="Company Name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                  },
                  "& .MuiInputBase-input": { color: "#0a0a60" },
                }}
              />
              <div className="block-21">
                <div className="country1">Country</div>
                <img className="icon2" alt="" src="/icon-1.svg" />
              </div>
            </div>
            <TextField
              className="row-3"
              placeholder="Street Address"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                },
                "& .MuiInputBase-input": { color: "#0a0a60" },
              }}
            />
            <TextField
              className="block-22"
              placeholder="Apartment / Suite / Unit / etc. (Optional)"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                },
                "& .MuiInputBase-input": { color: "#0a0a60" },
              }}
            />
            <TextField
              className="row-4"
              placeholder="Town / City"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                },
                "& .MuiInputBase-input": { color: "#0a0a60" },
              }}
            />
            <TextField
              className="block-23"
              placeholder="Email Address"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                },
                "& .MuiInputBase-input": { color: "#0a0a60" },
              }}
            />
            <div className="row-5">
              <TextField
                className="block-12"
                placeholder="ZIP"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                  },
                  "& .MuiInputBase-input": { color: "#0a0a60" },
                }}
              />
              <TextField
                className="block-24"
                placeholder="Phone"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                  },
                  "& .MuiInputBase-input": { color: "#0a0a60" },
                }}
              />
            </div>
          </div>
          <div className="billing-form-child" />
          <div className="billing-form-header">
            <Button
              className="button2"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#5a5a5a",
                fontSize: "16",
                borderColor: "#d9d9d9",
                borderRadius: "4px",
                "&:hover": { borderColor: "#d9d9d9" },
                width: 100,
                height: 54,
              }}
            >
              Back
            </Button>
            <Button
              className="button3"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#0a0a60",
                borderRadius: "4px",
                "&:hover": { background: "#0a0a60" },
                width: 135,
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
        <div className="checkout-details-parent">
          <div className="checkout-details">
            <Button
              className="header1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#0a0a60",
                borderRadius: "5px",
                "&:hover": { background: "#0a0a60" },
                height: 54,
              }}
            >
              Checkout Details
            </Button>
            <div className="order-details-items">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="order-details-values">$360.00</div>
            </div>
            <div className="order-details-items1">
              <div className="shipping-handling">{`Shipping & Handling`}</div>
              <div className="div1">$0.00</div>
            </div>
            <div className="order-details-items2">
              <div className="other-taxes">Other Taxes</div>
              <div className="div2">$0.00</div>
            </div>
            <div className="separator" />
            <div className="order-details-items3">
              <div className="grand-total">Grand Total</div>
              <div className="div3">$360.00</div>
            </div>
          </div>
          <div className="transfer-options">
            <TextField
              className="header2"
              placeholder="Transfer Options"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#0a0a60",
                  borderRadius: "5px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
            />
            <div className="checkout-details1">
              <div className="logos-block">
                <div className="block-13">
                  <div className="logo-block">
                    <img
                      className="image-1-icon"
                      loading="lazy"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                  <div className="bank-transfer">
                    <p className="bank">Bank</p>
                    <p className="transfer">Transfer</p>
                  </div>
                </div>
                <div className="block-25">
                  <div className="logo-block1">
                    <img
                      className="image-2-icon"
                      loading="lazy"
                      alt=""
                      src="/image-2@2x.png"
                    />
                  </div>
                  <div className="google-pay">
                    <p className="google">Google</p>
                    <p className="pay">Pay</p>
                  </div>
                </div>
              </div>
              <div className="payment-method-rows">
                <div className="block-3">
                  <div className="logo-block2">
                    <img
                      className="image-3-icon"
                      loading="lazy"
                      alt=""
                      src="/image-3@2x.png"
                    />
                  </div>
                  <div className="apple-pay">
                    <p className="apple">Apple</p>
                    <p className="pay1">Pay</p>
                  </div>
                </div>
                <div className="block-4">
                  <div className="logo-block3">
                    <img
                      className="image-4-icon"
                      loading="lazy"
                      alt=""
                      src="/image-4@2x.png"
                    />
                  </div>
                  <div className="paypal">PayPal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="checkout2">
        <div className="header3">
          <div className="checkout3">Checkout</div>
        </div>
        <div className="checkout-details2">
          <div className="your-personal-data">
            Your Personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our product
          </div>
          <Button
            className="button4"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#0a0a60",
              borderRadius: "4px",
              "&:hover": { background: "#0a0a60" },
              height: 54,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

BillingContainer.propTypes = {
  className: PropTypes.string,
};

export default BillingContainer;
