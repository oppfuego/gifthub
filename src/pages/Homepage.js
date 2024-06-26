import { Button } from "@mui/material";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Section from "../components/Section";
import GiftCards from "../components/GiftCards";
import GamingCards from "../components/GamingCards";
import GetYour from "../components/GetYour";
import Component from "../components/Component";
import "./Homepage.css";
import { FaRocket } from "react-icons/fa";
import {ReactComponent as HomePageImg} from "../components/img/HomePageImg.svg";
import { FaRegClock } from "react-icons/fa";


const Homepage = () => {
  return (
      <div className="homepage">
        <ResponsiveNavbar/>
        <section className="hero-image">
          <img
              className="image-37-icon"
              loading="lazy"
              alt=""
              src="/image-37@2x.png"
          />
          <h1 className="your-ultimate-destination">
            Your Ultimate Destination for Gift Cards
          </h1>
          <div className="use-a-vibrant">
            Use a vibrant and appealing background image, such as a collage of
            various gift cards or a festive scene with gift boxes.
          </div>
          <div className="hero-button">
            <Button
                className="component-5"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#0a0a60",
                  borderRadius: "50px",
                  "&:hover": {background: "#0a0a60"},
                  width: 159,
                  height: 50,
                }}
            >
              Add to Cart
            </Button>
          </div>
        </section>
        <Section/>
        <section className="features">
          <div className="features-container">
            <div className="feature-icons-containers-parent">
              <div className="feature-icons-containers">
                <h1 className="symbol3"><FaRocket/></h1>
              </div>
              <div className="feature-details-containers">
                <div className="heading-3-instant-delivary-container">
                  <h3 className="heading-33">Instant Delivary</h3>
                </div>
                <div className="our-gift-card-container1">
                  <p className="our-gift-card1">
                    Our Gift Card are digitally scanned and e-mailed
                  </p>
                  <p className="worldwide-you-can1">
                    worldwide. You can directly redeem and use with
                  </p>
                  <p className="no-delay1">no delay.</p>
                </div>
              </div>
            </div>
            <div className="frame-parent3">
              <div className="symbol-wrapper1">
                <h1 className="symbol4"><HomePageImg/></h1>
              </div>
              <div className="frame-parent4">
                <div className="heading-3-secure-payment-container">
                  <h3 className="heading-34">Secure payment</h3>
                </div>
                <div className="we-process-all-container1">
                  <p className="we-process-all1">
                    We process all purchases with encryption so your
                  </p>
                  <p className="payment-information-is1">
                    payment information is never stored on our
                  </p>
                  <p className="servers1">servers.</p>
                </div>
              </div>
            </div>
            <div className="frame-parent5">
              <div className="symbol-wrapper2">
                <h1 className="symbol5"><FaRegClock/></h1>
              </div>
              <div className="frame-parent6">
                <div className="heading-3-no-expiration-date-container">
                  <h3 className="heading-35">NO EXPIRATION DATE</h3>
                </div>
                <div className="the-gift-card-container1">
                  <p className="the-gift-card1">
                    The gift card will never expire. Whenever is the
                  </p>
                  <p className="most-convenient-time1">
                    most convenient time for you to use it, feel free to
                  </p>
                  <p className="do-so1">do so.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GiftCards/>
        <GamingCards/>
        <GetYour/>
        <Component/>
      </div>
  );
};

export default Homepage;
