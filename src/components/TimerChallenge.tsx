import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";

export const TimerChallenge = ({title, targetTime}: TimeChallengeProps) => {
    const timer = useRef<number | undefined>(undefined);
    const dialog = useRef<ModalProps>(null);

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    

    const handleStart = () => {
        timer.current = setTimeout(() =>{
            setTimerExpired(true);
            dialog.current?.open();
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
