import PropTypes from "prop-types";
import "./GetYour.css";

const GetYour = ({ className = "" }) => {
  return (
    <section className={`get-your ${className}`}>
      <div className="frame-parent8">
        <div className="get-your-desired-gift-cards-in-parent">
          <h1 className="get-your-desired-container">
            <p className="get-your-desired">Get Your Desired Gift Cards</p>
            <p className="instantly-from-giftcardever">
              Instantly from GiftCardEver
            </p>
          </h1>
          <div className="spend-no-more-container">
            <span>
              <p className="spend-no-more">
                Spend no more than a minute to get the gift cards you need!
                Enjoyyour favorite games, movies, music, and a lot more with the
                giftcards from GiftCardEver. The gift cards available on our
                site arepurchased directly from the official store. We only deal
                with
              </p>
              <p className="authorized-sellers-which">
                authorized sellers, which led us to serve over 24,000 customers
              </p>
              <p className="worldwide-who-trust">worldwide who trust us!</p>
            </span>
          </div>
        </div>
        <div className="we-are">
          <div className="heading-2-we-are-the-best-sh-parent">
            <h1 className="heading-211">
              We Are the Best Shop for iTunes Gift Card!
            </h1>
            <div className="looking-for-a-container">
              <span>
                <p className="looking-for-a">
                  Looking for a US-based iTunes gift card for Apple digital
                  products? We are offering a range of them every day at our
                  online store. Moreover, iTunes gift cards are our most sold
                  items. With the iTunes gift cards you purchase from us,
                  getting your favorite iOS games or apps, movies and music are
                  easier than ever!Before you purchase our iTunes gift cards,
                  make sure your iTunes account is located in the United States
                  region. Our iTunes cards will only work on US-based accounts
                  since we purchase them from
                </p>
                <p className="authorized-american-online">
                  authorized American online stores.
                </p>
              </span>
            </div>
          </div>
          <div className="also-get">
            <h1 className="also-get-spotify">
              Also Get Spotify, Google Play, Netflix, Xbox,Steam and Amazon
              Cards!
            </h1>
            <div className="besides-itunes-we">
              Besides iTunes, we offer a range of different gift cards that were
              purchased from authorized US-based stores! US Spotify gift cards
              can allow you to play and download music free without any ads!
              Netflix and Hulu cards are for you if you want to get into the
              streaming world full of movies and TV shows. Are you into gaming?
              Get Steam, PSN, and Xbox gift cards for getting credits for
              purchasing your favorite games! We also have Google Play and
              Amazon gift cards for purchasing items from each of the stores.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GetYour.propTypes = {
  className: PropTypes.string,
};

export default GetYour;
