import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Hero from "../components/Hero";
import GetYour from "../components/GetYour";
import Component from "../components/Component";
import "./ProductListings.css";

const ProductListings = () => {
  return (
    <div className="product-listings">
      <ResponsiveNavbar />
      <Hero />
      <section className="gift-cards-wrapper">
        <div className="gift-cards1">
          <h1 className="heading-25">Gift Cards</h1>
          <div className="container3">
            <div className="item14">
              <img
                className="link-amazon-gift-card-300x302"
                loading="lazy"
                alt=""
                src="/link--amazongiftcard300x300jpg1@2x.png"
              />
              <div className="link-heading9">Amazon Gift Card</div>
              <div className="div14">$12.95 – $112.95</div>
            </div>
            <div className="item15">
              <img
                className="link-visa-vanilla-gift-card-2"
                loading="lazy"
                alt=""
                src="/link--visavanillagiftcard300x300png1@2x.png"
              />
              <div className="visa-vanilla-gift1">Visa Vanilla Gift Card</div>
              <div className="div15">$33.97 – $114.97</div>
            </div>
            <div className="item16">
              <img
                className="link-shein-gift-card-300x3001"
                loading="lazy"
                alt=""
                src="/link--sheingiftcard300x300jpg2@2x.png"
              />
              <div className="link-heading10">Shein Gift Card</div>
              <div className="div16">$17.98 – $215.95</div>
            </div>
            <div className="item17">
              <img
                className="link-hulu-gift-cards-300x3001"
                loading="lazy"
                alt=""
                src="/link--hulugiftcards300x300jpg2@2x.png"
              />
              <div className="link-heading11">Hulu Gift Card</div>
              <div className="div17">$29.96 – $109.97</div>
            </div>
            <div className="item18">
              <img
                className="link-mint-gift-card-300x3001"
                loading="lazy"
                alt=""
                src="/link--mintgiftcard300x300jpg2@2x.png"
              />
              <div className="link-heading12">Mint Gift Card</div>
              <div className="div18">$11.30 – $113.00</div>
            </div>
          </div>
          <div className="view-all-gift-cards-button">
            <div className="button4" />
            <div className="button5" />
          </div>
        </div>
      </section>
      <section className="gaming-cards-wrapper">
        <div className="gaming-cards1">
          <h1 className="heading-26">Gaming Cards</h1>
          <div className="list1">
            <div className="item19">
              <img
                className="link-roblox-gift-card-300x301"
                loading="lazy"
                alt=""
                src="/link--robloxgiftcard300x300png2@2x.png"
              />
              <div className="link-heading13">Roblox Gift Card</div>
              <div className="div19">$11.99 – $101.97</div>
            </div>
            <div className="item20">
              <img
                className="link-pubg-mobile-gift-card-31"
                loading="lazy"
                alt=""
                src="/link--pubgmobilegiftcard300x300jpg2@2x.png"
              />
              <div className="pubg-mobile-gift1">PUBG Mobile Gift Card</div>
              <div className="div20">$12.97 – $105.97</div>
            </div>
            <div className="item21">
              <img
                className="link-minecraft-minecoin-coin1"
                loading="lazy"
                alt=""
                src="/link--minecraftminecoincoins300x300jpg2@2x.png"
              />
              <div className="link-heading14">Minecraft Gift Card</div>
              <div className="div21">$10.80 – $21.60</div>
            </div>
            <div className="item22">
              <img
                className="link-psn-plus-card-300x300j1"
                loading="lazy"
                alt=""
                src="/link--psnpluscard300x300jpg2@2x.png"
              />
              <div className="link-heading15">PSN Plus Card</div>
              <div className="div22">$29.97 – $69.95</div>
            </div>
            <div className="item23">
              <img
                className="link-karma-koin-gift-card-301"
                loading="lazy"
                alt=""
                src="/link--karmakoingiftcard300x300jpg2@2x.png"
              />
              <div className="karma-koin-gift1">Karma Koin Gift Card</div>
              <div className="div23">$27.97 – $104.95</div>
            </div>
          </div>
        </div>
      </section>
      <GetYour />
      <Component group1000006279="/group-1000006279-12@2x.png" />
    </div>
  );
};

export default ProductListings;
