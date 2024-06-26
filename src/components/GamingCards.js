import PropTypes from "prop-types";
import "./GamingCards.css";

const GamingCards = ({ className = "" }) => {
  return (
    <section className={`gaming-cards2 ${className}`}>
      <div className="heading-2-gaming-cards-parent">
        <h1 className="heading-210">Gaming Cards</h1>
        <div className="list2">
          <div className="item27">
            <img
              className="link-roblox-gift-card-300x302"
              loading="lazy"
              alt=""
              src="/link--robloxgiftcard300x300png@2x.png"
            />
            <div className="link-heading18">Roblox Gift Card</div>
            <div className="div27">$11.99 – $101.97</div>
          </div>
          <div className="item28">
            <img
              className="link-pubg-mobile-gift-card-32"
              loading="lazy"
              alt=""
              src="/link--pubgmobilegiftcard300x300jpg@2x.png"
            />
            <div className="pubg-mobile-gift2">PUBG Mobile Gift Card</div>
            <div className="div28">$12.97 – $105.97</div>
          </div>
          <div className="item29">
            <img
              className="link-minecraft-minecoin-coin2"
              loading="lazy"
              alt=""
              src="/link--minecraftminecoincoins300x300jpg@2x.png"
            />
            <div className="link-heading19">Minecraft Gift Card</div>
            <div className="div29">$10.80 – $21.60</div>
          </div>
          <div className="item30">
            <img
              className="link-psn-plus-card-300x300j2"
              loading="lazy"
              alt=""
              src="/link--psnpluscard300x300jpg@2x.png"
            />
            <div className="link-heading20">PSN Plus Card</div>
            <div className="div30">$29.97 – $69.95</div>
          </div>
          <div className="item31">
            <img
              className="link-karma-koin-gift-card-302"
              loading="lazy"
              alt=""
              src="/link--karmakoingiftcard300x300jpg@2x.png"
            />
            <div className="karma-koin-gift2">Karma Koin Gift Card</div>
            <div className="div31">$27.97 – $104.95</div>
          </div>
        </div>
      </div>
    </section>
  );
};

GamingCards.propTypes = {
  className: PropTypes.string,
};

export default GamingCards;
