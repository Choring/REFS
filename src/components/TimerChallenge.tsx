import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";

export const TimerChallenge = ({title, targetTime}: TimeChallengeProps) => {
    const timer = useRef<number | undefined>(undefined);
    const dialog = useRef<ModalProps>(null);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0 ) {
        clearInterval(timer.current);
        dialog.current?.open();
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);
    };

    const handleStart = () => {
        timer.current = setInterval(() =>{
            setTimeRemaining(prevTimeemaining => prevTimeemaining - 10);
        }, 10);
    }

    
    const handleStop = () => {
        dialog.current?.open();
        clearInterval(timer.current);
    }

  return (
    <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" remainingTime = {timeRemaining} onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime >  1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart }>
                {timerIsActive ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerIsActive ? "active" : undefined}>
            {timerIsActive ? "타이머 활성화..." : "타이머 비활성화"}
            </p>
        </section>
    </>
  )
}
