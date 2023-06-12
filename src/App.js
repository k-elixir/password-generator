// import "./App.css";
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
  const [inputType, setInputType] = useState("text");
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
    setInputType("password");
  }
  function showPass() {
    setEye(
      <FontAwesomeIcon
        icon={faEye}
        onClick={dontShowPass}
        title="Hide password"
      />
    );
    setInputType("text");
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
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center lg:w-2/5 sm:w-3/5 h-20 shadow-lg rounded-xl">
        <input
          type={inputType}
          value={password}
          readOnly
          className="text-xl px-4 select-none outline-none bg-transparent"
        />
        <div className="icons">
          <button className="text-2xl p-1">{eye}</button>
          <button className="text-2xl p-1" onClick={generatePass}>
            <FontAwesomeIcon icon={faRotate} title="Create Password" />
          </button>
          <button className="text-2xl p-1" onClick={copyPass}>
            <FontAwesomeIcon icon={faClipboard} title="Copy to clipboard" />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
