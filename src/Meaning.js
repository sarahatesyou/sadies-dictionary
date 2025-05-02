import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <small>{props.meaning.partOfSpeech}</small>
      <p>{props.meaning.definition}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
