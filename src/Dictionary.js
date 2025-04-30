import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {}

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "o091fdfe309a88f508fe60bcaa4tc41a";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiURL).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" value="🔎" />
      </form>
    </div>
  );
}
