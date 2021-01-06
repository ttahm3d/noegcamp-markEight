import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiDictionary = {
    "😊": "smiling face with smiling eyes",
    "😂": "face with tears of joy",
    "🤣": "rolling on the floor laughing",
    "❤": "heart",
    "😍": "rolling on the floor laughingsmiling face with heart eyes",
    "😒": "unamused face",
    "👌": "okay hand",
    "😘": "smiling face blowing a kiss",
    "💕": "two hearts",
    "😁": "grinning face with smiling eyes",
    "👍": "thumbs up",
    "🙌": "high five",
    "🤦‍♀️": "man facepalming",
    "🤷‍♀️": "woman shrugging",
    "✌": "crossed fingers",
    "🤞": "victory hand",
    "💖": "sparkling heart",
    "😜": "face with stuck out toungue and winking eye",
    "👏": "clapping hands",
    "🐱‍": "cat face",
    "🤔": "thinking face",
    "👀": "eyes",
    "😢": "crying face",
    "😆": "smiling with open mouth and closed eyes",
    "✔": "heavy checkmark",
    "🎶": "musical notes",
    "😎": "smiling face with sunglasses",
    "😉": "wink"
  };

  function userInputHandler(event) {
    const userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("Sorry!! We don't have that emoji with us");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input placeholder="Enter your emoji..." onChange={userInputHandler} />
      <div className="meaning">
        <p>{meaning}</p>
      </div>
      <div className="emojis-wrapper">
        {Object.keys(emojiDictionary).map((emoji, index) => {
          return (
            <div
              onClick={() => emojiClickHandler(emoji)}
              className="emoji"
              key={index}
            >
              <span>{emoji}</span>
            </div>
          );
        })}
      </div>
      <footer>
        Created by{" "}
        <a rel="noreferrer" target="_blank" href="https://github.com/ttahm3d">
          Tahir Ahmed T
        </a>
      </footer>
    </div>
  );
}
