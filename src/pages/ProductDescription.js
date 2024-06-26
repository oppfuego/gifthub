import ResponsiveNavbar from "../components/ResponsiveNavbar";
import ProductDetails from "../components/ProductDetails";
import ProductTitleContainer from "../components/ProductTitleContainer";
import CallToAction from "../components/CallToAction";
import GetYour from "../components/GetYour";
import Component from "../components/Component";
import "./ProductDescription.css";
import { FaRocket } from "react-icons/fa";
import {ReactComponent as HomePageImg} from "../components/img/HomePageImg.svg";
import { FaRegClock } from "react-icons/fa";



const ProductDescription = () => {
  return (
    <div className="product-description">
      <ResponsiveNavbar />
      <section className="content">
        <div className="product-details-parent">
          <ProductDetails />
          <div className="container">
            <img
              className="link-icon"
              loading="lazy"
              alt=""
              src="/link@2x.png"
            />
          </div>
        </div>
        <div className="product-info">
          <ProductTitleContainer />
        </div>
      </section>
      <section className="section">
        <div className="best-selling-title-container">
          <h1 className="heading-2">Best Selling Cards</h1>
        </div>
        <div className="best-selling-products">
          <div className="container1">
            <div className="item">
              <img
                className="link-google-play-cardjpg"
                loading="lazy"
                alt=""
                src="/link--googleplaycardjpg@2x.png"
              />
              <div className="heading-21">Google Play Gift card</div>
              <img
                className="img-rated-500-out-of-5"
                alt=""
                src="/img--rated-500-out-of-5.svg"
              />
              <div className="div">$12.97 – $106.97</div>
            </div>
            <div className="item1">
              <img
                className="link-netflix-gift-card-300x3"
                loading="lazy"
                alt=""
                src="/link--netflixgiftcard300x300jpg@2x.png"
              />
              <div className="heading-22">Netflix Gift Card</div>
              <img
                className="img-rated-500-out-of-51"
                alt=""
                src="/img--rated-500-out-of-5.svg"
              />
              <div className="div1">$18.49 – $107.97</div>
            </div>
            <div className="item2">
              <img
                className="link-amazon-gift-card-300x30"
                loading="lazy"
                alt=""
                src="/link--amazongiftcard300x300jpg@2x.png"
              />
              <div className="link-heading">Amazon Gift Card</div>
              <img
                className="img-rated-500-out-of-52"
                alt=""
                src="/img--rated-500-out-of-5-2.svg"
              />
              <div className="div2">$12.95 – $112.95</div>
            </div>
            <div className="item3">
              <img
                className="link-visa-vanilla-gift-card-"
                loading="lazy"
                alt=""
                src="/link--visavanillagiftcard300x300png@2x.png"
              />
              <div className="link-heading1">Visa Vanilla Gift Card</div>
              <img
                className="img-rated-500-out-of-53"
                alt=""
                src="/img--rated-500-out-of-5.svg"
              />
              <div className="div3">$33.97 – $114.97</div>
            </div>
          </div>
          <div className="view-more-button-container">
            <div className="view-more-buttons">
              <div className="button" />
              <div className="button1" />
            </div>
          </div>
        </div>
      </section>
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
      <CallToAction />
      <section className="gift-card-categories">
        <div className="gift-cards">
          <h1 className="heading-23">Gift Cards</h1>
          <div className="container2">
            <div className="item4">
              <img
                className="link-amazon-gift-card-300x301"
                alt=""
                src="/link--amazongiftcard300x300jpg-11@2x.png"
              />
              <div className="link-heading2">Amazon Gift Card</div>
              <div className="div4">$12.95 – $112.95</div>
            </div>
            <div className="item5">
              <img
                className="link-visa-vanilla-gift-card-1"
                alt=""
                src="/link--visavanillagiftcard300x300png-11@2x.png"
              />
              <div className="visa-vanilla-gift">Visa Vanilla Gift Card</div>
              <div className="div5">$33.97 – $114.97</div>
            </div>
            <div className="item6">
              <img
                className="link-shein-gift-card-300x300"
                loading="lazy"
                alt=""
                src="/link--sheingiftcard300x300jpg1@2x.png"
              />
              <div className="link-heading3">Shein Gift Card</div>
              <div className="div6">$17.98 – $215.95</div>
            </div>
            <div className="item7">
              <img
                className="link-hulu-gift-cards-300x300"
                loading="lazy"
                alt=""
                src="/link--hulugiftcards300x300jpg1@2x.png"
              />
              <div className="link-heading4">Hulu Gift Card</div>
              <div className="div7">$29.96 – $109.97</div>
            </div>
            <div className="item8">
              <img
                className="link-mint-gift-card-300x300"
                loading="lazy"
                alt=""
                src="/link--mintgiftcard300x300jpg1@2x.png"
              />
              <div className="link-heading5">Mint Gift Card</div>
              <div className="div8">$11.30 – $113.00</div>
            </div>
          </div>
          <div className="gift-card-view-more-container">
            <div className="button2" />
            <div className="button3" />
          </div>
        </div>
      </section>
      <section className="gaming-cards-category">
        <div className="gaming-cards">
          <h1 className="heading-24">Gaming Cards</h1>
          <div className="list">
            <div className="item9">
              <img
                className="link-roblox-gift-card-300x30"
                loading="lazy"
                alt=""
                src="/link--robloxgiftcard300x300png1@2x.png"
              />
              <div className="link-heading6">Roblox Gift Card</div>
              <div className="div9">$11.99 – $101.97</div>
            </div>
            <div className="item10">
              <img
                className="link-pubg-mobile-gift-card-3"
                loading="lazy"
                alt=""
                src="/link--pubgmobilegiftcard300x300jpg1@2x.png"
              />
              <div className="pubg-mobile-gift">PUBG Mobile Gift Card</div>
              <div className="div10">$12.97 – $105.97</div>
            </div>
            <div className="item11">
              <img
                className="link-minecraft-minecoin-coin"
                loading="lazy"
                alt=""
                src="/link--minecraftminecoincoins300x300jpg1@2x.png"
              />
              <div className="link-heading7">Minecraft Gift Card</div>
              <div className="div11">$10.80 – $21.60</div>
            </div>
            <div className="item12">
              <img
                className="link-psn-plus-card-300x300j"
                loading="lazy"
                alt=""
                src="/link--psnpluscard300x300jpg1@2x.png"
              />
              <div className="link-heading8">PSN Plus Card</div>
              <div className="div12">$29.97 – $69.95</div>
            </div>
            <div className="item13">
              <img
                className="link-karma-koin-gift-card-30"
                loading="lazy"
                alt=""
                src="/link--karmakoingiftcard300x300jpg1@2x.png"
              />
              <div className="karma-koin-gift">Karma Koin Gift Card</div>
              <div className="div13">$27.97 – $104.95</div>
            </div>
          </div>
        </div>
      </section>
      <GetYour />
      <Component group1000006279="/group-1000006279-11@2x.png" />
    </div>
  );
};

export default ProductDescription;
