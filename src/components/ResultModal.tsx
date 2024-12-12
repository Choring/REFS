import { forwardRef, useImperativeHandle, useRef } from "react";


export const ResultModal = forwardRef<ModalProps, ResultProps> (({ result, targetTime, remainingTime, onReset }, ref) => {
    const dialog = useRef<HTMLDialogElement | null >(null);
    
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => ({
        open() {
          dialog.current?.showModal();
        }
    }));

    return (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>Your {result}</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You Stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form action="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})

