import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Component from "../components/Component";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-1920">
      <ResponsiveNavbar />
      <main className="frame-parent">
        <section className="frame-wrapper">
          <div className="frame-group">
            <div className="sign-in-wrapper">
              <div className="sign-in">
                <div className="frame-container">
                  <div className="sign-in-parent">
                    <h1 className="sign-in1">Sign in</h1>
                    <div className="sign-in-to">
                      Sign in to your account to see products catered to you
                    </div>
                  </div>
                  <form className="frame-form">
                    <TextField
                      className="frame-child"
                      placeholder="Username"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="16px"
                            height="16px"
                            src="/input-fields.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#c6c6c6" },
                        "& .MuiInputBase-root": {
                          height: "40px",
                          backgroundColor: "#fff",
                          paddingRight: "20px",
                        },
                        "& .MuiInputBase-input": { color: "#0a0a60" },
                      }}
                    />
                    <TextField
                      className="frame-item"
                      placeholder="Password"
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
                        "& fieldset": { borderColor: "#c6c6c6" },
                        "& .MuiInputBase-root": {
                          height: "40px",
                          backgroundColor: "#fff",
                          paddingRight: "21px",
                        },
                        "& .MuiInputBase-input": { color: "#0a0a60" },
                      }}
                    />
                    <Button
                      className="button"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "16",
                        background: "#0a0a60",
                        borderRadius: "4px",
                        "&:hover": { background: "#0a0a60" },
                      }}
                    >
                      Sign In
                    </Button>
                  </form>
                  <div className="or-sign-in">or, sign in with</div>
                  <div className="frame-div">
                    <img
                      className="frame-inner"
                      loading="lazy"
                      alt=""
                      src="/frame-158.svg"
                    />
                    <img
                      className="frame-icon"
                      loading="lazy"
                      alt=""
                      src="/frame-158.svg"
                    />
                    <img
                      className="frame-child1"
                      loading="lazy"
                      alt=""
                      src="/frame-158.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Component />
          </div>
        </section>
        <img
          className="background-icon"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </main>
    </div>
  );
};

export default SignIn;
