import FrameComponent from "../components/FrameComponent";
import BillingContainer from "../components/BillingContainer";
import Component from "../components/Component";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import "./Checkout.css";

const Checkout = () => {
    return (
        <div className="checkout-1920">
            <ResponsiveNavbar/>
            <div className="checkout-main-top">
                <div className="content-container">
                    <h1>
                        Checkout
                    </h1>
                    <p>
                        View or edit your cart before checkout
                    </p>
                </div>
            </div>
            <section className="billing-container-wrapper">
                <BillingContainer/>
            </section>
            <Component/>
        </div>
    );
};

export default Checkout;
