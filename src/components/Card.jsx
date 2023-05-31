import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.EmojiSymbol}
        </span>
        <span>{props.EmojiName}</span>
      </dt>
      <dd>{props.EmojiMeaning}</dd>
    </div>
  );
}
export default Card;
