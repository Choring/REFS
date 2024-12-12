import { forwardRef, useImperativeHandle, useRef } from "react";


export const ResultModal = forwardRef<ModalProps, ResultProps> (({ result, targetTime }, ref) => {
    const dialog = useRef<HTMLDialogElement | null >(null);
    
    useImperativeHandle(ref, () => ({
        open() {
          dialog.current?.showModal();
        }
    }));

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>Your {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You Stopped the timer with <strong>X seconds left.</strong></p>
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

