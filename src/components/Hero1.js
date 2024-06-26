import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Hero1.css";

const Hero1 = ({ className = "" }) => {
  return (
    <section className={`hero1 ${className}`}>
      <img className="image-20-icon" alt="" src="/image-20@2x.png" />
      <div className="image-21" />
      <div className="hero-content">
        <div className="hero-title1">
          <h1 className="get-in-touch">Get in Touch</h1>
          <div className="we-value-your">
            We value your feedback, inquiries, and the opportunity to assist
            you. Stay connected with us on social media for the latest updates,
            promotions, and sweet moments.
          </div>
        </div>
        <form className="hero-form">
          <div className="form-container">
            <div className="form-fields">
              <div className="form-inputs">
                <div className="name-inputs">
                  <TextField
                    className="name-fields"
                    placeholder="First Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#0a0a60" },
                      "& .MuiInputBase-root": {
                        height: "55px",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": { color: "#0a0a60" },
                    }}
                  />
                  <TextField
                    className="name-fields1"
                    placeholder="Last Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#0a0a60" },
                      "& .MuiInputBase-root": {
                        height: "55px",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": { color: "#0a0a60" },
                    }}
                  />
                </div>
                <TextField
                  className="contact-info"
                  placeholder="Email"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#0a0a60" },
                    "& .MuiInputBase-root": {
                      height: "55px",
                      borderRadius: "8px",
                    },
                    "& .MuiInputBase-input": { color: "#0a0a60" },
                  }}
                />
                <TextField
                  className="contact-info1"
                  placeholder="Your Message"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#0a0a60" },
                    "& .MuiInputBase-root": {
                      height: "129px",
                      borderRadius: "8px",
                    },
                    "& .MuiInputBase-input": { color: "#0a0a60" },
                  }}
                />
              </div>
            </div>
          </div>
          <Button
            className="component-3"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#0a0a60",
              borderRadius: "8px",
              "&:hover": { background: "#0a0a60" },
              height: 50,
            }}
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

Hero1.propTypes = {
  className: PropTypes.string,
};

export default Hero1;
