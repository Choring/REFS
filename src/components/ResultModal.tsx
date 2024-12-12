import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

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

    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>Your {result}</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>목표 시간은 <strong>{targetTime} 초.</strong></p>
            <p>당신은 <strong>{formattedRemainingTime}초를 남기고 타이머를 멈췄습니다.</strong></p>
            <form action="dialog" onSubmit={onReset}>
                <button>닫기</button>
            </form>
        </dialog>,
        document.getElementById('modal') || document.body
    );
});
