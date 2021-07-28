import React, { useState, useEffect } from "react";
import marked from "marked";
import "../styles/main.css";
import { makeRe } from "minimatch";
function Main() {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(`
  <h1>Header</h1>
  <h2>Sub-Header</h2>
  <a href="#">I'm a Link</a>
  <p>Block code</p>
  <span>Inline code</span>
  <ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
  </ul>
  <blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>
<img src="https://images.unsplash.com/photo-1502462456379-a6dbfdd0faef?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="300px" width="300px"/>
<p><b>Bolded Text</b></p>`);
  }, []);
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="main">
      <div className="input-container">
        <h1 id="sub-heading">Editor</h1>
        <textarea id="editor" value={text} onChange={handleText}></textarea>
      </div>
      <div className="output-container">
        <h1 id="sub-heading">Previewer</h1>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    </div>
  );
}

export default Main;
