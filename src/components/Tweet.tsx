import "./Tweet.css";

import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";

import { Link } from "react-router-dom";

interface TweetProps {
  tweet: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/davifdev.png" alt="Davi Fernandes" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Davi Fernandes</strong>
          <span>@davifdev</span>
        </div>

        <p>{props.tweet}</p>

        <div className="tweet-content-footer">
          <button>
            <ChatCircle />
            20
          </button>
          <button>
            <ArrowClockwise />
            34
          </button>
          <button>
            <Heart />
            50
          </button>
        </div>
      </div>
    </Link>
  );
}
