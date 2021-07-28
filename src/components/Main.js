import React, { useState } from "react";
import "../styles/main.css";
function Main() {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="main">
      <div className="input-container">
        <h1>Editor</h1>
        <textarea id="editor" onChange={handleText}></textarea>
      </div>
      <div className="output-container">
        <h1>Previewer</h1>
        <p id="preview">{text}</p>
      </div>
    </div>
  );
}

export default Main;
