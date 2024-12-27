import "./Status.css";

import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { FormEvent, KeyboardEvent, useState } from "react";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswer, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido!",
    "Parabéns pelo progresso.",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswers("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswers("");
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime nemo, ipsam, illo pariatur incidunt nulla accusamus iure minus quod exercitationem neque. Eligendi laboriosam libero recusandae aperiam laudantium, cumque veniam." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/davifdev.png" alt="Davi Fernandes" />
          <textarea
            placeholder="Tweet your answer"
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswers(event.target.value)}
            value={newAnswer}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} tweet={answer} />
      ))}
    </main>
  );
}
