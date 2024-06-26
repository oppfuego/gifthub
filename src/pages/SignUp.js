import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ResponsiveNavbar1 from "../components/ResponsiveNavbar1";
import Component1 from "../components/Component1";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-1920">
      <ResponsiveNavbar1 />
      <main className="content">
        <section className="sign-up-form-parent">
          <div className="sign-up-form">
            <div className="sign-in2">
              <div className="sign-up-parent">
                <h1 className="sign-up">Sign up</h1>
                <div className="sign-up-to">
                  Sign up to get rewards, and many more
                </div>
              </div>
              <form className="input-fields">
                <div className="name-fields">
                  <TextField
                    className="name-inputs"
                    placeholder="Your Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#a7a7a7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                      },
                      "& .MuiInputBase-input": { color: "#0a0a60" },
                    }}
                  />
                  <TextField
                    className="account-fields"
                    placeholder="Email"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#a7a7a7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                      },
                      "& .MuiInputBase-input": { color: "#0a0a60" },
                    }}
                  />
                </div>
                <div className="name-fields1">
                  <TextField
                    className="name-fields-child"
                    placeholder="Address"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#a7a7a7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                      },
                      "& .MuiInputBase-input": { color: "#0a0a60" },
                    }}
                  />
                  <div className="country-parent">
                    <div className="country">Country</div>
                    <img
                      className="account-input-separator"
                      alt=""
                      src="/account-input-separator.svg"
                    />
                  </div>
                </div>
                <div className="name-fields2">
                  <TextField
                    className="name-fields-item"
                    placeholder="Username"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="16px"
                          height="16px"
                          src="/frame-153-1.svg"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#a7a7a7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                        paddingRight: "11px",
                      },
                      "& .MuiInputBase-input": { color: "#0a0a60" },
                    }}
                  />
                  <TextField
                    className="name-fields-inner"
                    placeholder="Password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="16px"
                          height="16px"
                          src="/frame-153-2.svg"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#a7a7a7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                        paddingRight: "11px",
                      },
                      "& .MuiInputBase-input": { color: "#0a0a60" },
                    }}
                  />
                </div>
                <Button
                  className="button1"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#0a0a60",
                    borderRadius: "4px",
                    "&:hover": { background: "#0a0a60" },
                    height: 54,
                  }}
                >
                  Sign Up
                </Button>
              </form>
              <div className="or-sign-up">or, sign up with</div>
              <div className="social-buttons">
                <img
                  className="social-icons"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-icons1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-icons2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="background-shape-icon"
            loading="lazy"
            alt=""
            src="/rectangle-491@2x.png"
          />
        </section>
        <Component1 />
      </main>
    </div>
  );
};

export default SignUp;
