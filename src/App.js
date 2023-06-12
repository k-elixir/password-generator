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
    <FontAwesomeIcon
      icon={faEye}
      onClick={dontShowPass}
      title="Hide password"
    />
  );

  function dontShowPass() {
    setEye(
      <FontAwesomeIcon
        icon={faEyeSlash}
        onClick={showPass}
        title="Show password"
      />
    );
    setStar("password");
  }
  function showPass() {
    setEye(
      <FontAwesomeIcon
        icon={faEye}
        onClick={dontShowPass}
        title="Hide password"
      />
    );
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
      <input
        type={star}
        value={password}
        readOnly
        className="text-xl px-4 lg:w-2/5 sm:w-3/5 h-20 shadow-lg absolute left-2/4 top-2/4 rounded-xl select-none outline-none -translate-y-2/4 -translate-x-2/4"
      />
      <div className="icons absolute left-2/4 bottom-1/3 sm:-translate-y-24 lg:translate-x-28 sm:translate-x-24  -translate-x-16">
        <button className="text-2xl p-1">{eye}</button>
        <button className="text-2xl p-1" onClick={generatePass}>
          <FontAwesomeIcon icon={faRotate} title="Create Password" />
        </button>
        <button className="text-2xl p-1" onClick={copyPass}>
          <FontAwesomeIcon icon={faClipboard} title="Copy to clipboard" />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
