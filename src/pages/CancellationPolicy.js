import ResponsiveNavbar from "../components/ResponsiveNavbar";
import FrameComponent from "../components/FrameComponent";
import RefundProcess from "../components/RefundProcess";
import Component from "../components/Component";
import "./CancellationPolicy.css";

const CancellationPolicy = () => {
  return (
    <div className="cancellation-policy">
      <ResponsiveNavbar />
      <section className="cancellation-policy1">
        <h1 className="cancellation-policy2">Cancellation Policy</h1>
        <div className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </section>
      <section className="cancellation-policy-types">
        <div className="lilylamb-kids-we1">
          This Cancellation Policy outlines the terms and conditions regarding
          the cancellation of gift card purchases from [Your Gift Card Website].
          By purchasing a gift card from our website, you agree to the terms of
          this cancellation policy. Please read it carefully.
        </div>
        <FrameComponent
          lostOrStolenGiftCards="General Cancellation Policy"
          responsibility="1.1 No Cancellations"
          yourCompanyIsNotResponsib="Once a gift card has been purchased from [Your Gift Card Website], the sale is considered final. Gift card purchases cannot be canceled and are non-refundable, except where required by law. Please ensure that all details are correct before completing your purchase."
          safeguarding="1.2 Exceptions"
          usersShouldKeepTheirGiftC="In certain exceptional circumstances, and at the sole discretion of [Your Company], a cancellation request may be considered. These circumstances include, but are not limited to, technical errors during the purchase process or unauthorized transactions. Any decision to allow a cancellation is made on a case-by-case basis and is final."
          propHeight="44px"
          propDisplay="inline-block"
        />
        <FrameComponent
          lostOrStolenGiftCards=" Eligibility for Cancellations"
          responsibility="2.1 Unauthorized Transactions"
          yourCompanyIsNotResponsib="If you believe that a gift card purchase was made without your authorization, you must contact our customer support team immediately. Unauthorized transactions may be eligible for cancellation if reported promptly. You may be required to provide documentation or evidence supporting your claim."
          safeguarding="2.2 Technical Errors"
          usersShouldKeepTheirGiftC="If you experience a technical error during the purchase process that results in an incorrect charge or duplicate charge, you may be eligible for a cancellation. Please contact our customer support team with the details of the error, including any relevant transaction IDs or screenshots."
          propHeight="unset"
          propDisplay="unset"
        />
        <RefundProcess
          refundRequestProcess="Cancellation Request Process"
          toRequestARefundContactOu="To request a cancellation, contact our customer support team at [Email] or [Phone Number]. Provide the following information:"
          aDetailedExplanationOfThe="A detailed explanation of the reason for the cancellation request"
          reviewAndProcessing="3.2 Review and Processing"
          ourCustomerSupportTeamWil="Our customer support team will review your cancellation request and may ask for additional information or documentation. Cancellation requests are typically processed within [X] business days. You will be notified of the outcome of your request via email."
          approvedRefunds="3.3  Approved Cancellations"
          ifYourRefundRequestIsAppr="If your cancellation request is approved, the cancellation will be processed, and any funds will be returned to the original payment method used for the purchase. The time it takes for the funds to be credited to your account may vary depending on your bank or payment provider."
        />
        <FrameComponent
          lostOrStolenGiftCards="Special Cases"
          responsibility="4.1 Incorrect Amounts Loaded"
          yourCompanyIsNotResponsib="If an incorrect amount was loaded onto your gift card due to an error, you may be eligible for a cancellation of the incorrect amount or an adjustment to the correct value. Please contact our customer support team with the details of the error."
          safeguarding="4.2 Lost or Stolen Gift Cards"
          usersShouldKeepTheirGiftC="Lost or stolen gift cards are generally not eligible for cancellation. Users are responsible for safeguarding their gift cards and treating them like cash. In certain circumstances, a replacement card may be issued at the discretion of [Your Company], but this does not constitute a cancellation."
          propHeight="unset"
          propDisplay="unset"
        />
        <FrameComponent
          lostOrStolenGiftCards="Non-Cancellable Items"
          responsibility="5.1 Promotional and Bonus Cards"
          yourCompanyIsNotResponsib="Promotional or bonus gift cards received as part of a promotion or special offer are not eligible for cancellation. These cards have no cash value and cannot be exchanged for cash or other gift cards."
          safeguarding="5.2Partially Used Gift Cards"
          usersShouldKeepTheirGiftC="Gift cards that have been partially used are not eligible for cancellation of the remaining balance. Once a gift card has been used, it cannot be returned or exchanged."
          propHeight="22px"
          propDisplay="inline-block"
        />
        <FrameComponent
          lostOrStolenGiftCards="Merchant Cancellations"
          responsibility="6.1 Product Returns"
          yourCompanyIsNotResponsib="If you return a product purchased with a gift card to a participating merchant, the return will be processed according to the merchant’s return policy. The merchant may issue a credit to the gift card or provide a store credit, but this is not managed by [Your Company]."
          safeguarding="6.2 Disputes with Merchants"
          usersShouldKeepTheirGiftC="Any disputes regarding purchases made with a gift card should be resolved directly with the merchant. [Your Company] is not responsible for resolving disputes related to merchant transactions."
          propHeight="unset"
          propDisplay="unset"
        />
        <div className="contact-info1">
          <h1 className="contact-information4">
            <ol className="contact-information5">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="if-you-have-container2">
            <p className="if-you-have2">
              If you have any questions or concerns about this Cancellation
              Policy, please contact us at:
            </p>
            <p className="blank-line2">&nbsp;</p>
            <p className="brandname-customer-support2">
              BrandName Customer Support
            </p>
            <p className="email-supportbrandnamecom2">
              Email: support@brandname.com
            </p>
            <p className="phone-1-800-123-45672">Phone: +1-800-123-4567</p>
            <p className="address-123-main2">
              Address: 123 Main Street, Suite 456, City, Country, ZIP Code
            </p>
          </div>
        </div>
      </section>
      <Component />
      <div className="footer2">
        <div className="footer3">
          <div className="container1">
            <div className="logo-group">
              <div className="logo1">
                <div className="vector-group">
                  <img className="vector-icon1" alt="" src="/vector.svg" />
                  <div className="card-melange1">Card Melange</div>
                </div>
              </div>
              <div className="yougotagift-is-the-leading-group">
                <div className="yougotagift-is-the1">
                  YOUGotaGift is the leading
                </div>
                <div className="marketplace-for-digital1">
                  Marketplace for Digital Gift Cards
                </div>
                <div className="in-the-middle1">in the Middle East</div>
              </div>
              <div className="a542-439c-b075-9ce64c518a9bpn-group">
                <img
                  className="a542-439c-b075-9ce64c518a9bpn-icon1"
                  alt=""
                  src="/08723276a542439cb0759ce64c518a9bpng@2x.png"
                />
                <img
                  className="a69d9157-3732-4139-b56a-d6e339-icon1"
                  alt=""
                  src="/a69d915737324139b56ad6e339fd8052png@2x.png"
                />
                <img
                  className="edfaa219-5d52-40f5-918f-b94c7d-icon1"
                  alt=""
                  src="/edfaa2195d5240f5918fb94c7d38eec4png@2x.png"
                />
                <img
                  className="d933dc-4be6-4a83-a015-5628572f-icon1"
                  alt=""
                  src="/67d933dc4be64a83a0155628572f311fpng@2x.png"
                />
              </div>
              <img
                className="c6883-dea4-4b05-b3ab-70a11800b-icon1"
                alt=""
                src="/709c6883dea44b05b3ab70a11800b58cpng@2x.png"
              />
            </div>
            <div className="heading-5-company-group">
              <div className="heading-54">Company</div>
              <div className="link-for-business-group">
                <div className="link-for1">For Business</div>
                <div className="link-blog1">Blog</div>
                <div className="link-careers1">Careers</div>
                <a
                  className="link-buy2"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-1463"
                  target="_blank"
                >
                  Buy eGift Cards
                </a>
                <div className="link-buy3">Buy Gaming Cards</div>
              </div>
            </div>
            <div className="heading-5-policy-info-group">
              <div className="heading-55">{`Policy & Info`}</div>
              <div className="link-about-us-group">
                <a
                  className="link-about1"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-4693"
                  target="_blank"
                >
                  About Us
                </a>
                <a
                  className="link-media1"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-5036"
                  target="_blank"
                >
                  Media Centre
                </a>
                <a
                  className="link-privacy1"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-5430"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                <a
                  className="link-terms1"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-5879"
                  target="_blank"
                >
                  Terms of Use
                </a>
              </div>
            </div>
            <div className="link10" />
            <div className="heading-5-our-socials-group">
              <div className="heading-56">Our Socials</div>
              <div className="frame-container">
                <div className="c384a92-1060-4b7f-ae23-dab0cf2-group">
                  <img
                    className="c384a92-1060-4b7f-ae23-dab0cf2-icon1"
                    alt=""
                    src="/2c384a9210604b7fae23dab0cf246a2apng@2x.png"
                  />
                  <div className="facebook1">Facebook</div>
                </div>
                <div className="link11">
                  <div className="e7c-5a5d-4a72-9754-81cc7c265d7-group">
                    <img
                      className="e7c-5a5d-4a72-9754-81cc7c265d7-icon1"
                      alt=""
                      src="/56112e7c5a5d4a72975481cc7c265d7apng@2x.png"
                    />
                    <div className="instagram1">Instagram</div>
                  </div>
                </div>
                <div className="link12">
                  <div className="a12ff94-daca-4434-bddb-4645d7c-group">
                    <img
                      className="a12ff94-daca-4434-bddb-4645d7c-icon1"
                      alt=""
                      src="/6a12ff94daca4434bddb4645d7cc4819png@2x.png"
                    />
                    <div className="linkedin1">LinkedIn</div>
                  </div>
                </div>
                <div className="link13">
                  <div className="db02829-0f66-4224-a68e-08b9930-group">
                    <img
                      className="db02829-0f66-4224-a68e-08b9930-icon1"
                      alt=""
                      src="/2db028290f664224a68e08b9930b707fpng@2x.png"
                    />
                    <div className="youtube1">Youtube</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading-57">Download Our App</div>
            <img
              className="link-e364f011-4cc7-4e8a-bca91"
              alt=""
              src="/link--e364f0114cc74e8abca9a8896c1c5030png@2x.png"
            />
            <img
              className="link-f3b1db0f-eb9f-4b0a-89f71"
              alt=""
              src="/link--f3b1db0feb9f4b0a89f74d955239e7a2png@2x.png"
            />
            <div className="horizontalborder1">
              <div className="gifteuphoriacom-ltd-all1">
                © 2024 GiftEuphoria.com Ltd. All rights reserved.
              </div>
              <div className="link14">
                <a
                  className="uae1"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-2"
                  target="_blank"
                >
                  UAE
                </a>
                <a
                  className="a1"
                  href="https://www.figma.com/design/F3Crk1DE1Xirfv7jRlZwjo?node-id=1-2"
                  target="_blank"
                >
                  |
                </a>
              </div>
              <div className="link15">
                <div className="saudi-arabia1">Saudi Arabia</div>
                <div className="div5">|</div>
              </div>
              <div className="link16">
                <div className="qatar1">Qatar</div>
                <div className="div6">|</div>
              </div>
              <div className="link17">
                <div className="bahrain1">Bahrain</div>
                <div className="div7">|</div>
              </div>
              <div className="link18">
                <div className="oman1">Oman</div>
                <div className="div8">|</div>
              </div>
              <div className="link19">
                <div className="kuwait1">Kuwait</div>
                <div className="div9">|</div>
              </div>
              <div className="link-india1">India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
