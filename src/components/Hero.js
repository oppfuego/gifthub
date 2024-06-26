import Container from "./Container";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="header-heading-1-shop-wrapper">
        <h1 className="header-heading">Shop</h1>
      </div>
      <div className="product-listing">
        <div className="product-listing-header">
          <div className="showing-115-of">Showing 1–15 of 46 results</div>
          <div className="form-options-shop-order">
            <input
              className="product-sort"
              placeholder="Default sorting"
              type="text"
            />
            <img className="icon4" alt="" src="/icon-11.svg" />
          </div>
        </div>
        <div className="product-grid">
          <div className="container11">
            <img
              className="link-icon2"
              loading="lazy"
              alt=""
              src="/link1@2x.png"
            />
            <div className="product-card-titles">
              <div className="heading-212">Amazon Gift Card</div>
            </div>
            <div className="product-card-subtitles">
              <div className="div38">$12.95 – $112.95</div>
            </div>
          </div>
          <Container
            link="/link-1@2x.png"
            applebeesGiftCard="Applebee’s Gift Card"
            prop="$26.97 – $105.97"
          />
          <Container
            link="/link-2@2x.png"
            applebeesGiftCard="Bigo Live Gift Card"
            prop="$10.00 – $100.00"
            propLeft="448px"
            propTop="0px"
          />
          <Container
            link="/link-3@2x.png"
            applebeesGiftCard="Binance USDT Gift Card"
            prop="$59.95 – $175.95"
            propLeft="672px"
            propTop="0px"
          />
          <Container
            link="/link-4@2x.png"
            applebeesGiftCard="Cabelas Gift Card"
            prop="$57.95 – $212.62"
            propLeft="896px"
            propTop="0px"
          />
          <Container
            link="/link-5@2x.png"
            applebeesGiftCard="Celebrity Cruises Gift Cards"
            prop="$50.00 – $500.00"
            propLeft="0px"
            propTop="355px"
          />
          <Container
            link="/link-6@2x.png"
            applebeesGiftCard="Crunchyroll Gift Card"
            prop="$12.97 – $105.97"
            propLeft="224px"
            propTop="355px"
          />
          <Container
            link="/link-7@2x.png"
            applebeesGiftCard="CVS Pharmacy Gift Cards"
            prop="$16.20 – $108.00"
            propLeft="448px"
            propTop="355px"
          />
          <Container
            link="/link-8@2x.png"
            applebeesGiftCard="eBay Gift Card"
            prop="$29.95 – $112.95"
            propLeft="672px"
            propTop="355px"
          />
          <Container
            link="/link-9@2x.png"
            applebeesGiftCard="Fortnite V Bucks Gift Card"
            prop="$17.95 – $92.95"
            propLeft="896px"
            propTop="355px"
          />
          <Container
            link="/link-10@2x.png"
            applebeesGiftCard="Garena Free Fire Gift Card"
            prop="$12.97 – $23.97"
            propLeft="0px"
            propTop="710px"
          />
          <Container
            link="/link-11@2x.png"
            applebeesGiftCard="Google Play Gift Card"
            prop="$12.97 – $106.97"
            propLeft="224px"
            propTop="710px"
          />
          <Container
            link="/link-12@2x.png"
            applebeesGiftCard="Hulu Gift Card"
            prop="$29.96 – $109.97"
            propLeft="448px"
            propTop="710px"
          />
          <Container
            link="/link-13@2x.png"
            applebeesGiftCard="IMVU Gift Card"
            prop="$10.95 – $51.82"
            propLeft="672px"
            propTop="710px"
          />
          <Container
            link="/link-14@2x.png"
            applebeesGiftCard="iTunes Gift Card"
            prop="$12.97 – $109.97"
            propLeft="896px"
            propTop="710px"
          />
        </div>
        <div className="pagination">
          <div className="pagination-items">
            <div className="item32">
              <div className="page-number-links">1</div>
            </div>
            <div className="item-link9">
              <div className="div39">2</div>
            </div>
            <div className="item-link9">
              <div className="div39">3</div>
            </div>
            <div className="item-link10">
              <div className="div40">4</div>
            </div>
            <div className="item-link11">
              <a
                className="a1"
                href="https://www.figma.com/design/nns4ukaWwIbyc7WXzGcQzx?node-id=2-5155"
                target="_blank"
              >
                →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
