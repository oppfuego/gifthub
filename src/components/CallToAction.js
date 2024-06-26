import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./CallToAction.css";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const CallToAction = ({ className = "" }) => {
  return (
    <section className={`call-to-action ${className}`}>
      <div className="call-to-action-container">
        <div className="border">
          <div className="button11">
            <div className="symbol6"><FaMinus/></div>
            <div className="who-and-why">
              Who and Why Should Someone Buy “US iTunes gift card”
            </div>
          </div>
          <div className="region">
            <div className="on-the-app">
              On the App Store, there are a lot of cool games and programs that
              you can’t get without spending money.
            </div>
            <div className="furthermore-if-you-container">
              <span className="furthermore-if-you-container1">
                <p className="furthermore-if-you">
                  Furthermore, if you have credits in your account, you may now
                  get books, movies, and music from the App Store,
                </p>
                <p className="itunes-store-and">
                  iTunes Store, and other stores in an ethical manner.
                </p>
              </span>
            </div>
            <div className="fortunately-anybody-may-container">
              <span>
                <p className="fortunately-anybody-may">
                  Fortunately, anybody may purchase a US iTunes gift card for
                  the App Store even if they are not a US resident. Our site
                </p>
                <p className="offers-a-variety">
                  offers a variety of Gift Cards in various denominations that
                  may be put to your iOS account immediately.
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="border3">
          <div className="button12">
            <div className="symbol7"><FaPlus/></div>
            <div className="get-app-store">
              Buy US iTunes Gift Card Online
            </div>
          </div>
        </div>
        <div className="border3">
          <div className="button12">
            <div className="symbol7"><FaPlus/></div>
            <div className="get-app-store">
              Get Your iTunes Card Instantly On Your Email            </div>
          </div>
        </div>
        <div className="border3">
          <div className="button12">
            <div className="symbol7"><FaPlus/></div>
            <div className="get-app-store">
              Get App Store Credits for Music, Apps, Games, and More
            </div>
          </div>
        </div>
        <div className="border3">
          <div className="button12">
            <div className="symbol7"><FaPlus/></div>
            <div className="get-app-store">
              How to Redeem iTunes Gift Card            </div>
          </div>
        </div>

      </div>
      <div className="email-delivery">
        <div className="we-send-us-container">
          <span className="we-send-us-container1">
            <p className="we-send-us">
              We send US iTunes gift cards to your email address quickly, and
              you can use them to
            </p>
            <p className="buy-anything-from">
              buy anything from the App Store or the iTunes Store. The credit is
              protected in your
            </p>
            <p className="account-after-redemption">
              account after redemption and will only be utilized when you make a
              purchase. You will
            </p>
            <p className="receive-the-complete">
              receive the complete amount if you purchase a $10 card!
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default CallToAction;
