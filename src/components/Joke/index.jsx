import React from 'react';
import { useState } from 'react';
import './style.css';

export const Joke = ({ avatar, name, text, likes, dislikes }) => {
  const [likesNumber, setLikesNumber] = useState(likes);
  const [dislikesNumber, setDislikesNumber] = useState(dislikes);

  return (
    <div key={name} className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={avatar} />
            <p className="user-name">{name}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setLikesNumber(likesNumber + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likesNumber}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setDislikesNumber(dislikesNumber + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {dislikesNumber}
          </span>
        </div>
      </div>
    </div>
  );
};
