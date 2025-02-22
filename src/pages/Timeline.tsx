import "./Timeline.css";

import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import { Header } from "../components/Header";
import { FormEvent, KeyboardEvent, useState } from "react";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "Meu primeiro Tweet",
    "Olá, Mundo!",
    "Eu sou Desenvolvedor Full Stack",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/davifdev.png" alt="Davi Fernandes" />
          <textarea
            placeholder="What´s happening?"
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
            value={newTweet}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} tweet={tweet} />
      ))}
    </main>
  );
}
