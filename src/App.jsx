import { useState } from "react";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function App() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [data, setData] = useState(null);
  let recaptchaVerifier; // Initialize verifier here

  const generateOtp = async (e) => {
    e.preventDefault();
    console.log(auth);
    try {
      if (!recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {},
            "expired-callback": () => {},
          }
        );
        window.recaptchaVerifier.render().then((widgetId) => {
          window.recaptchaWidgetId = widgetId;
        });
      }
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      console.log(confirmationResult);
      window.confirmationResult = confirmationResult;
      // Handle confirmation result here (e.g., navigate to a verification page)
    } catch (error) {
      console.error(error); // Log the error
      // Display an error message to the user
    }
  };
  const otpSubmit = (e) => {
    e.preventDefault();
    window.confirmationResult.confirm(otp).then((r) => {
      setData(r)
      console.log(r);
    });
  };
  return (
    <div
      style={{
        marginLeft: "200px",
      }}
    >
      <div id="recaptcha-container"></div>
      <form onSubmit={generateOtp}>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter the phone number"
        />
        <button type="submit">Generate</button>
      </form>
      <form onSubmit={otpSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter otp"
        />
        <button type="submit">Submit</button>
      </form>
      <div
        style={{
          overflow: "scroll",
          width: "500px",
          height: "200px",
        }}
      >
        {data && JSON.stringify(data,null,2)}
      </div>
    </div>
  );
}

export default App;
