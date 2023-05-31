import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function CreateCard(emojiTerm) {
  return (
    <Card
      EmojiId={emojiTerm.id}
      key={emojiTerm.id}
      EmojiSymbol={emojiTerm.emoji}
      EmojiName={emojiTerm.name}
      EmojiMeaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
