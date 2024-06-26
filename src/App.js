import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDescription from "./pages/ProductDescription";
import ProductListings from "./pages/ProductListings";
import ContactUs from "./pages/ContactUs";
import CartDetails from "./pages/CartDetails";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-description":
        title = "";
        metaDescription = "";
        break;
      case "/product-listings":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/cart-details-1920":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product-description" element={<ProductDescription />} />
      <Route path="/product-listings" element={<ProductListings />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/cart-details-1920" element={<CartDetails />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/privacy" element={<RefundPolicy />} />
    </Routes>
  );
}
export default App;
