import React from "react";
import "../styles/main.css";
function Main() {
  return (
    <div className="main">
      <div className="input-container">
        <h2>Editor</h2>
        <textarea id="editor" cols="50" rows="20"></textarea>
      </div>
      <div className="output-container">
        <h2>Previewer</h2>
        <div id="preview">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, deleniti
          totam delectus inventore assumenda odit dolorum quibusdam! Omnis
          explicabo corporis fugit quia culpa at veritatis. Veritatis cupiditate
          voluptatibus doloribus fugit?
        </div>
      </div>
    </div>
  );
}

export default Main;
