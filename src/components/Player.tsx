import { useState, useRef } from "react";

export const Player = () => {
  const playerName = useRef<HTMLInputElement>(null);
  const [enterdPlayerName, setEnterdPlayerName] = useState<string | null>(null);

  const handleClick = () => {
    if(playerName.current){
      setEnterdPlayerName(playerName.current.value);
      playerName.current.value = "";
    }
  }

  return (
    <section id="player">
      <h2>Welcome {enterdPlayerName ?? "unknown entity" }</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  )
}
