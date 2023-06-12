import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function App() {
  const [password, setPassword] = useState("Password Generator");
  const [star, setStar] = useState("text");
  const [eye, setEye] = useState(
    <FontAwesomeIcon icon={faEye} onClick={dontShowPass} />
  );

  function dontShowPass() {
    setEye(<FontAwesomeIcon icon={faEyeSlash} onClick={showPass} />);
    setStar("password");
  }
  function showPass() {
    setEye(<FontAwesomeIcon icon={faEye} onClick={dontShowPass} />);
    setStar("text");
  }

  function generatePass() {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passLength = 22;
    var randomPass = "";
    for (var i = 0; i <= passLength; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      randomPass += characters.substring(randomIndex, randomIndex + 1);
    }
    setPassword(randomPass);
  }

  function copyPass() {
    navigator.clipboard.writeText(password);
    toast("Copied!");
  }

  return (
    <div>
      <input type={star} value={password} readOnly />
      <div className="icons">
        <button>{eye}</button>
        <button onClick={generatePass}>
          <FontAwesomeIcon icon={faRotate} />
        </button>
        <button onClick={copyPass}>
          <FontAwesomeIcon icon={faClipboard} />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
