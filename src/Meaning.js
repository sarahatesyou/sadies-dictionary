import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <small>{props.meaning.partOfSpeech}</small>
      <p>{props.meaning.definition}</p>
    </div>
  );
}
