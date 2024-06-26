import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import "./CartDetails.css";
import Component from "../components/Component";

const CartDetails = () => {
  return (
      <>
        <ResponsiveNavbar/>
        <div className="cart-details-1920">
          <FrameComponent1/>
          <section className="cart-details-1920-inner">
            <FrameComponent/>
          </section>
          <Component/>
        </div>

      </>
  );
};

export default CartDetails;
