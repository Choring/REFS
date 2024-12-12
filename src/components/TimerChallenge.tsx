import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";

type Props = {
    title: string;
    targetTime: number;
}

export const TimerChallenge = ({title, targetTime}: Props) => {
    const timer = useRef<number | undefined>(undefined);
    const dialog = useRef<HTMLDialogElement | null>(null);

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    

    const handleStart = () => {
        timer.current = setTimeout(() =>{
            setTimerExpired(true);
            dialog.current?.showModal();
        }, targetTime * 1000);

        setTimerStarted(true);
    }
    const handleStop = () => {
        clearTimeout(timer.current);
    }

  return (
    <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime >  1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart }>
                {timerStarted ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
            {timerStarted ? "Time is running..." : "Timer inactive"}
            </p>
        </section>
    </>
  )
}
