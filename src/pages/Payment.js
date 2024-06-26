import Content from "../components/Content";
import Contact from "../components/Contact";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-1920">
      <div className="main">
        <Content />
      </div>
      <div className="rectangle-parent">
        <div className="rectangle-div" />
        <Contact />
      </div>
    </div>
  );
};

export default Payment;
