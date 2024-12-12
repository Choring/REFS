import { forwardRef } from "react";
 
interface Props {
    result: string;
    targetTime: number;
}

export const ResultModal = forwardRef<HTMLDialogElement, Props> (({ result, targetTime }, ref) => {

    return (
        <dialog ref={ref} className="result-modal">
            <h2>Your {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You Stopped the timer with <strong>X seconds left.</strong></p>
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

