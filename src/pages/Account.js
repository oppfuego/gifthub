import FrameComponent from "../components/FrameComponent";
import Component from "../components/Component";
import "./Account.css";
import ResponsiveNavbar from "../components/ResponsiveNavbar";


const Account = () => {
  return (
      <>
        <ResponsiveNavbar/>
        <div className="account-1920">
          <section className="page">

            <div className="dashboard-container-wrapper">
              <div className="dashboard-container">
                <div className="dashboard-content">
                  <div className="welcome-message">
                    <h1 className="welcome-darnell">Welcome, Darnell</h1>
                  </div>
                  <div className="your-personal-dashboard">
                    Your Personal Dashboard
                  </div>
                </div>
              </div>
            </div>
          </section>
<FrameComponent/>
          <Component/>
        </div>
      </>

  );
};

export default Account;
