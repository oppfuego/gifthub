import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <div className={`content1 ${className}`}>
      <div className="container">
        <img
          className="container-child"
          loading="lazy"
          alt=""
          src="/group-1000006279@2x.png"
        />
        <div className="gift">
          <img
            className="gifthub-icon5"
            loading="lazy"
            alt=""
            src="/gifthub.svg"
          />
        </div>
      </div>
      <div className="image-block">
        <div className="image-wrapper">
          <div className="image-31" />
          <img
            className="image-wrapper-child"
            loading="lazy"
            alt=""
            src="/group-1000006283@2x.png"
          />
        </div>
      </div>
      <div className="legal2">
        <div className="copyright">
          <div className="powered-by">{`Powered by `}</div>
        </div>
        <div className="legal-links">
          <img
            className="payment-icons"
            loading="lazy"
            alt=""
            src="/payment-icons@2x.png"
          />
          <div className="icon-background">
            <img
              className="icon-shape"
              loading="lazy"
              alt=""
              src="/vector-341.svg"
            />
          </div>
          <div className="legal-options">
            <div className="legal3">Legal</div>
          </div>
          <div className="legal-options1">
            <div className="refunds">Refunds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
