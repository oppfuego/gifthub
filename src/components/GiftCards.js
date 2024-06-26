import Item from "./Item";
import PropTypes from "prop-types";
import "./GiftCards.css";

const GiftCards = ({ className = "" }) => {
  return (
    <section className={`gift-cards2 ${className}`}>
      <div className="heading-2-gift-cards-parent">
        <h1 className="heading-29">Gift Cards</h1>
        <div className="container5">
          <Item
            linkAmazonGiftCard300x300="/link--amazongiftcard300x300jpg-1@2x.png"
            linkHeading2AmazonGiftCar="Amazon Gift Card"
            prop="$12.95 – $112.95"
          />
          <Item
            linkAmazonGiftCard300x300="/link--visavanillagiftcard300x300png-1@2x.png"
            linkHeading2AmazonGiftCar="Visa Vanilla Gift Card"
            prop="$33.97 – $114.97"
          />
          <Item
            linkAmazonGiftCard300x300="/link--sheingiftcard300x300jpg@2x.png"
            linkHeading2AmazonGiftCar="Shein Gift Card"
            prop="$17.98 – $215.95"
          />
          <Item
            linkAmazonGiftCard300x300="/link--hulugiftcards300x300jpg@2x.png"
            linkHeading2AmazonGiftCar="Hulu Gift Card"
            prop="$29.96 – $109.97"
          />
          <div className="item26">
            <img
              className="link-mint-gift-card-300x3002"
              loading="lazy"
              alt=""
              src="/link--mintgiftcard300x300jpg@2x.png"
            />
            <div className="link-heading17">Mint Gift Card</div>
            <div className="div26">$11.30 – $113.00</div>
          </div>
        </div>
        <div className="gift-cards-button">
          <div className="button8" />
          <div className="button9" />
        </div>
      </div>
    </section>
  );
};

GiftCards.propTypes = {
  className: PropTypes.string,
};

export default GiftCards;
