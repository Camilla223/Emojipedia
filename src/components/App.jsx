import React from "react";
import emojipedia from "../emojipedia";
import Item from "./Item";

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji) => {
          return (
            <Item
              key={emoji.id}
              emoji={emoji.emoji}
              name={emoji.name}
              meaning={emoji.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
