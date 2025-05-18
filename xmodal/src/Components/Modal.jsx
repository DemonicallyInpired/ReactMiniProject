const isTest = navigator.userAgent.includes("Cypress");
import ReactModal from "react-modal";
import { forwardRef, useRef, useState } from "react";
const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "40%",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    ...(isTest && { PointerEvent: "none" }),
  },
};
const Button = ({ children, ...rest }) => {
  const { minwidth } = rest;
  return (
    <button
      style={{
        padding: "1rem 0.5rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        minWidth: minwidth === undefined ? "fit-content" : `${minwidth}`,
        backgroundColor: "blue",
        color: "#fff",
        border: "none",
        appearance: "none",
        borderRadius: "10px",
        fontWeight: "bold",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
const Input = forwardRef((props, ref) => {
  return (
    <input
      style={{
        width: "60%",
        border: "0.4px solid #eee",
        padding: "0.5rem",
        display: "inline-block",
        outline: "none",
      }}
      ref={ref}
      {...props}
    />
  );
});
export default function UserModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const [username, setUsername] = useState("");
  const userRef = useRef(null);
  const [phone, setPhone] = useState("");
  const phoneRef = useRef(null);
  const [dob, setDOB] = useState("");
  const dobReference = useRef(null);

  const handleClose = () => {
    let hasErrors = false;
    emailRef.current.setCustomValidity("");
    phoneRef.current.setCustomValidity("");
    if (username === "") {
      userRef.current.setCustomValidity("Please fill out this field");
      userRef.current.reportValidity();
      hasErrors = true;
    } else if (email === "" && !Object.is(emailRef.current, null)) {
      emailRef.current.setCustomValidity("Please fill out this field");
      emailRef.current.reportValidity();
      hasErrors = true;
    } else if (!email.includes("@")) {
      window.alert("Invalid email. Please check your email address.");
      hasErrors = true;
    } else if (phone === "" && !Object.is(phoneRef.current, null)) {
      phoneRef.current.setCustomValidity("Please fill out this field");
      phoneRef.current.reportValidity();
      hasErrors = true;
    } else if (phone.length < 10) {
      hasErrors = true;
      window.alert(
        "Invalid phone number. Please enter a 10-digit phone number."
      );
    } else if (dob === "") {
      dobReference.current.setCustomValidity("Please fill out this field");
      dobReference.current.reportValidity();
      hasErrors = true;
    } else if (dob && new Date(dob) >= Date.now()) {
      hasErrors = true;
      window.alert(
        "Invalid date of birth. Date of birth cannot be in the future"
      );
    }
    if (hasErrors) return;
    setEmail("");
    setDOB("");
    setPhone("");
    setUsername("");
    setOpen(false);
  };
  const handleOverlayClose = () => {
    setOpen(false);
  };
  const handleChange = (event, id) => {
    switch (id) {
      case "email": {
        setEmail(event.target.value);
        break;
      }
      case "username": {
        setUsername(event.target.value);
        break;
      }
      case "phone": {
        setPhone(event.target.value);
        break;
      }
      case "dob": {
        setDOB(event.target.value);
        break;
      }
      default: {
        throw new Error(`invalid form Element with id ${id}`);
      }
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>User Details Modal</h2>
      <Button onClick={handleOpen}>Open Form</Button>
      <ReactModal
        isOpen={open}
        onRequestClose={handleOverlayClose}
        style={customStyle}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
      >
        <div className="modal">
          <form>
            <div
              className="modal-content"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                width: "100%",
              }}
            >
              <label style={{ fontWeight: "bold" }} htmlFor="username">
                Username:
              </label>
              <Input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(event) => handleChange(event, "username")}
                ref={userRef}
                required
              />
              <label style={{ fontWeight: "bold" }} htmlFor="email">
                Email Address:
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                ref={emailRef}
                onChange={(event) => handleChange(event, "email")}
                required
              />
              <label style={{ fontWeight: "bold" }} htmlFor="phone">
                Phone Number:
              </label>
              <Input
                type="tel"
                id="phone"
                value={phone}
                ref={phoneRef}
                onChange={(event) => handleChange(event, "phone")}
                required
              />

              <label style={{ fontWeight: "bold" }} htmlFor="dob">
                Date of Birth:
              </label>
              <Input
                type="date"
                id="dob"
                value={dob}
                onChange={(event) => handleChange(event, "dob")}
                ref={dobReference}
                required
              />
              <Button
                onClick={handleClose}
                className="submit-button"
                minwidth={"80%"}
                type="button"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </ReactModal>
    </div>
  );
}
