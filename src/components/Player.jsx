import { useState } from "react";
import React from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEdit() {
    setIsEditting((editting) => !editting); //* recommended by react

    if (isEditting) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
    // console.log(playerName); //*TESTING
  }

  let player = <span className="player-name">{playerName}</span>;
  //   let button = <button onClick={handleEdit}>Edit</button>;
  //   let btnCaption = "Edit";
  //* THERE 3 WAYS TO "EDIT" THE BUTTON CAPTION IN THIS FOLDER, I'M LEAVING ALL 3 BUT USING ONLY ONE

  if (isEditting) {
    player = (
      <input
        // className="player-name"
        type="text"
        placeholder="Player Name"
        required
        onChange={handleChange}
        value={playerName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
