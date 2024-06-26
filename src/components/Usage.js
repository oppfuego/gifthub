import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Usage.css";

const Usage = ({
  className = "",
  useOfGiftCards,
  redemption,
  giftCardsCanBeRedeemedAtP,
  nonTransferable,
  giftCardsAreNonTransferab,
  noCashRedemption,
  giftCardsAreNotRedeemable,
  expiration,
  giftCardsDoNotExpireHowev,
  propHeight,
  propDisplay,
  propHeight1,
  propDisplay1,
}) => {
  const giftCardsAreStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const giftCardsDoStyle = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay1,
    };
  }, [propHeight1, propDisplay1]);

  return (
    <div className={`usage ${className}`}>
      <h1 className="use-of-gift-container">
        <p className="use-of-gift-cards">
          {useOfGiftCards}
        </p>
      </h1>
      <div className="redemption">
        <div className="redemption-details">
          <h3 className="redemption1">{redemption}</h3>
          <div className="gift-cards-can1">{giftCardsCanBeRedeemedAtP}</div>
        </div>
        <div className="redemption-details1">
          <h3 className="non-transferable">{nonTransferable}</h3>
          <div className="gift-cards-are">{giftCardsAreNonTransferab}</div>
        </div>
        <div className="redemption-details2">
          <h3 className="no-cash-redemption">{noCashRedemption}</h3>
          <div className="gift-cards-are1" style={giftCardsAreStyle}>
            {giftCardsAreNotRedeemable}
          </div>
        </div>
        <div className="redemption-details3">
          <h3 className="expiration">{expiration}</h3>
          <div className="gift-cards-do" style={giftCardsDoStyle}>
            {giftCardsDoNotExpireHowev}
          </div>
        </div>
      </div>
    </div>
  );
};

Usage.propTypes = {
  className: PropTypes.string,
  useOfGiftCards: PropTypes.string,
  redemption: PropTypes.string,
  giftCardsCanBeRedeemedAtP: PropTypes.string,
  nonTransferable: PropTypes.string,
  giftCardsAreNonTransferab: PropTypes.string,
  noCashRedemption: PropTypes.string,
  giftCardsAreNotRedeemable: PropTypes.string,
  expiration: PropTypes.string,
  giftCardsDoNotExpireHowev: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay1: PropTypes.any,
};

export default Usage;
