import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Usage from "../components/Usage";
import RefundProcess from "../components/RefundProcess";
import Component from "../components/Component";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <ResponsiveNavbar />
      <section className="policy-title">
        <h1 className="refund-policy1">Refund Policy</h1>
      </section>
      <section className="lilylamb-kids-we-us-or-parent">
        <div className="lilylamb-kids-we">
          This Refund Policy outlines the terms and conditions regarding refunds
          for gift cards purchased from [Your Gift Card Website]. By purchasing
          a gift card from our website, you agree to the terms of this refund
          policy. Please read it carefully.
        </div>

        <Usage
            useOfGiftCards="1. General Refund Policy"
            redemption="1.1 General Refund Policy"
            giftCardsAreNonTransferab="Gift cards purchased from [Your Gift Card Website] are non-refundable and cannot be exchanged for cash, except where required by law. Once a gift card is purchased, the sale is final, and the value cannot be refunded."
            expiration="1.2 Exceptions"
            giftCardsDoNotExpireHowev="In certain exceptional circumstances, and at the sole discretion of [Your Company], a refund may be issued. These circumstances include, but are not limited to, technical errors during the purchase process or unauthorized transactions. Any decision to issue a refund is made on a case-by-case basis and is final."

        />
        <Usage
          useOfGiftCards="2. Eligibility for Refunds"
          redemption="2.1 Unauthorized Transactions"
          giftCardsAreNonTransferab="If you believe that a purchase of a gift card was made without your authorization, you must contact our customer support team immediately. Unauthorized transactions may be eligible for a refund if reported promptly. You may be required to provide documentation or evidence supporting your claim."
          expiration="2.2 Technical Errors"
          giftCardsDoNotExpireHowev="If you experience a technical error during the purchase process that results in an incorrect charge or duplicate charge, you may be eligible for a refund. Please contact our customer support team with the details of the error, including any relevant transaction IDs or screenshots."

        />
        <RefundProcess
          refundRequestProcess="3. Refund Request Process"
          toRequestARefundContactOu="To request a refund, contact our customer support team at [Email] or [Phone Number]. Provide the following information:"
          aDetailedExplanationOfThe="A detailed explanation of the reason for the refund request"
          reviewAndProcessing="3.2  Review and Processing"
          ourCustomerSupportTeamWil="Our customer support team will review your refund request and may ask for additional information or documentation. Refund requests are typically processed within [X] business days. You will be notified of the outcome of your request via email."
          approvedRefunds="3.2 Approved Refunds"
          ifYourRefundRequestIsAppr="If your refund request is approved, the refund will be processed using the original payment method used for the purchase. The time it takes for the refund to be credited to your account may vary depending on your bank or payment provider."
        />
        <Usage
          useOfGiftCards="4. Special Cases"
          redemption="4.1 Incorrect Amounts Loaded"
          giftCardsAreNonTransferab="If an incorrect amount was loaded onto your gift card due to an error, you may be eligible for a refund of the incorrect amount or an adjustment to the correct value. Please contact our customer support team with the details of the error."
          expiration="4.2 Lost or Stolen Gift Cards"
          giftCardsDoNotExpireHowev="Lost or stolen gift cards are generally not eligible for a refund. Users are responsible for safeguarding their gift cards and treating them like cash. In certain circumstances, a replacement card may be issued at the discretion of [Your Company], but this does not constitute a refund."
        />
        <Usage
          useOfGiftCards="5. Non-Refundable Items"
          redemption="5.1 Promotional and Bonus Cards"
          giftCardsAreNonTransferab="Promotional or bonus gift cards received as part of a promotion or special offer are not eligible for a refund. These cards have no cash value and cannot be exchanged for cash or other gift cards."
          expiration="5.2 Partially Used Gift Cards"
          giftCardsDoNotExpireHowev="Gift cards that have been partially used are not eligible for a refund of the remaining balance. Once a gift card has been used, it cannot be returned or exchanged."

        />
        <Usage
          useOfGiftCards="6. Merchant Refunds"
          redemption="6.1Product Returns"
          giftCardsAreNonTransferab="If you return a product purchased with a gift card to a participating merchant, the return will be processed according to the merchant’s return policy. The merchant may issue a credit to the gift card or provide a store credit, but this is not managed by [Your Company]."
          expiration="6.2 Disputes with Merchants"
          giftCardsDoNotExpireHowev="Any disputes regarding purchases made with a gift card should be resolved directly with the merchant. [Your Company] is not responsible for resolving disputes related to merchant transactions. "

        />
        <div className="contact-info">
          <h1 className="contact-information2">
            <p className="contact-information3">
              7. Contact Information
            </p>
          </h1>
          <div className="contact-disclaimer">
            <div className="if-you-have-container1">
              <p className="if-you-have1">
                If you have any questions or concerns about this Refund Policy,
                please contact us at:
              </p>
              <p className="blank-line1">&nbsp;</p>
              <p className="brandname-customer-support1">
                BrandName Customer Support
              </p>
              <p className="email-supportbrandnamecom1">
                Email: support@brandname.com
              </p>
              <p className="phone-1-800-123-45671">Phone: +1-800-123-4567</p>
              <p className="address-123-main1">
                Address: 123 Main Street, Suite 456, City, Country, ZIP Code
              </p>
            </div>
          </div>
        </div>
      </section>
      <Component />
      <div className="footer">
        <div className="footer1">
          <div className="container">
            <div className="logo-parent">
              <div className="logo">
                <div className="vector-parent">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                  <div className="card-melange">Card Melange</div>
                </div>
              </div>
              <div className="yougotagift-is-the-leading-parent">
                <div className="yougotagift-is-the">
                  YOUGotaGift is the leading
                </div>
                <div className="marketplace-for-digital">
                  Marketplace for Digital Gift Cards
                </div>
                <div className="in-the-middle">in the Middle East</div>
              </div>
              <div className="a542-439c-b075-9ce64c518a9bpn-parent">
                <img
                  className="a542-439c-b075-9ce64c518a9bpn-icon"
                  alt=""
                  src="/08723276a542439cb0759ce64c518a9bpng@2x.png"
                />
                <img
                  className="a69d9157-3732-4139-b56a-d6e339-icon"
                  alt=""
                  src="/a69d915737324139b56ad6e339fd8052png@2x.png"
                />
                <img
                  className="edfaa219-5d52-40f5-918f-b94c7d-icon"
                  alt=""
                  src="/edfaa2195d5240f5918fb94c7d38eec4png@2x.png"
                />
                <img
                  className="d933dc-4be6-4a83-a015-5628572f-icon"
                  alt=""
                  src="/67d933dc4be64a83a0155628572f311fpng@2x.png"
                />
              </div>
              <img
                className="c6883-dea4-4b05-b3ab-70a11800b-icon"
                alt=""
                src="/709c6883dea44b05b3ab70a11800b58cpng@2x.png"
              />
            </div>
            <div className="heading-5-company-parent">
              <div className="heading-5">Company</div>
              <div className="link-for-business-parent">
                <div className="link-for">For Business</div>
                <div className="link-blog">Blog</div>
                <div className="link-careers">Careers</div>
                <a
                  className="link-buy"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
                  target="_blank"
                >
                  Buy eGift Cards
                </a>
                <div className="link-buy1">Buy Gaming Cards</div>
              </div>
            </div>
            <div className="heading-5-policy-info-parent">
              <div className="heading-51">{`Policy & Info`}</div>
              <div className="link-about-us-parent">
                <a
                  className="link-about"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-4693"
                  target="_blank"
                >
                  About Us
                </a>
                <a
                  className="link-media"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-5036"
                  target="_blank"
                >
                  Media Centre
                </a>
                <a
                  className="link-privacy"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-5430"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                <a
                  className="link-terms"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-5879"
                  target="_blank"
                >
                  Terms of Use
                </a>
              </div>
            </div>
            <div className="link" />
            <div className="heading-5-our-socials-parent">
              <div className="heading-52">Our Socials</div>
              <div className="frame-group">
                <div className="c384a92-1060-4b7f-ae23-dab0cf2-parent">
                  <img
                    className="c384a92-1060-4b7f-ae23-dab0cf2-icon"
                    alt=""
                    src="/2c384a9210604b7fae23dab0cf246a2apng@2x.png"
                  />
                  <div className="facebook">Facebook</div>
                </div>
                <div className="link1">
                  <div className="e7c-5a5d-4a72-9754-81cc7c265d7-parent">
                    <img
                      className="e7c-5a5d-4a72-9754-81cc7c265d7-icon"
                      alt=""
                      src="/56112e7c5a5d4a72975481cc7c265d7apng@2x.png"
                    />
                    <div className="instagram">Instagram</div>
                  </div>
                </div>
                <div className="link2">
                  <div className="a12ff94-daca-4434-bddb-4645d7c-parent">
                    <img
                      className="a12ff94-daca-4434-bddb-4645d7c-icon"
                      alt=""
                      src="/6a12ff94daca4434bddb4645d7cc4819png@2x.png"
                    />
                    <div className="linkedin">LinkedIn</div>
                  </div>
                </div>
                <div className="link3">
                  <div className="db02829-0f66-4224-a68e-08b9930-parent">
                    <img
                      className="db02829-0f66-4224-a68e-08b9930-icon"
                      alt=""
                      src="/2db028290f664224a68e08b9930b707fpng@2x.png"
                    />
                    <div className="youtube">Youtube</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading-53">Download Our App</div>
            <img
              className="link-e364f011-4cc7-4e8a-bca9"
              alt=""
              src="/link--e364f0114cc74e8abca9a8896c1c5030png@2x.png"
            />
            <img
              className="link-f3b1db0f-eb9f-4b0a-89f7"
              alt=""
              src="/link--f3b1db0feb9f4b0a89f74d955239e7a2png@2x.png"
            />
            <div className="horizontalborder">
              <div className="gifteuphoriacom-ltd-all">
                © 2024 GiftEuphoria.com Ltd. All rights reserved.
              </div>
              <div className="link4">
                <a
                  className="uae"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-2"
                  target="_blank"
                >
                  UAE
                </a>
                <a
                  className="a"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-2"
                  target="_blank"
                >
                  |
                </a>
              </div>
              <div className="link5">
                <div className="saudi-arabia">Saudi Arabia</div>
                <div className="div">|</div>
              </div>
              <div className="link6">
                <div className="qatar">Qatar</div>
                <div className="div1">|</div>
              </div>
              <div className="link7">
                <div className="bahrain">Bahrain</div>
                <div className="div2">|</div>
              </div>
              <div className="link8">
                <div className="oman">Oman</div>
                <div className="div3">|</div>
              </div>
              <div className="link9">
                <div className="kuwait">Kuwait</div>
                <div className="div4">|</div>
              </div>
              <div className="link-india">India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
