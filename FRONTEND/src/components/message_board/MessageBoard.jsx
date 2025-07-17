import "./MessageBoard.css";
import { useState } from "react";

function MessageBoard({ send_message, setRefresh, history, receiver_id }) {
  const [current_message, setCurrent_message] = useState("");
  if (!receiver_id) {
    return (
      <div className="message_board">
        {" "}
        <svg
        className="mbsvg"
          width="128"
          height="128"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="128" height="128" fill="#fff6ec" />
          <g stroke="#000" stroke-width="4" fill="none">
            <path
              d="M20 40 h40 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-8 l-12 10 v-10 h-20 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10 z"
              fill="#ffffff"
            />
            <circle cx="35" cy="60" r="3" fill="#000" />
            <circle cx="45" cy="60" r="3" fill="#000" />
            <circle cx="55" cy="60" r="3" fill="#000" />
          </g>
          <g stroke="#000" stroke-width="4" fill="#a0a0a0">
            <rect x="70" y="40" width="40" height="30" rx="4" ry="4" />
            <polygon
              points="110,45 125,55 110,65"
              fill="#e3e3e3"
              stroke="#000"
            />
          </g>
        </svg>
        <span className="msgspan">Select Contact to Chat</span>
      </div>
    );
  }
  return (
    <div className="message_board">
      <div className="chat_not_bar">
        <div className="tpro">
          <img src="https://cdn2.iconfinder.com/data/icons/user-people-4/48/6-512.png" />
          <span>{receiver_id}</span>
        </div>
      </div>
      <div className="chat_messages">
        {history.current.map((msg) => {
          if (msg[2] == receiver_id) {
            return (
              <div className={"send_message_" + msg[1]}>
                <div>{msg[0]}</div>
              </div>
            );
          }
        })}
      </div>
      <div className="Write_message">
        <input
          className="type_message"
          type="text"
          onChange={(event) => {
            setCurrent_message(event.target.value);
          }}
        />
        <button
          onClick={() => {
            send_message.go(current_message, receiver_id);
            console.log(current_message);
            console.log(history.current);
            setRefresh(Date.now());
          }}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default MessageBoard;
