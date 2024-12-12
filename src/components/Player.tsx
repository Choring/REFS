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
      <h2>환영합니다. {enterdPlayerName === null ? "이름을 입력해 주세요!" : `${enterdPlayerName}님` }</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  )
}
