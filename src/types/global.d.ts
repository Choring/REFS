export {};

declare global {
  interface ModalProps {
    open: () => void;
  }

  interface ResultProps {
    result: string;
    targetTime: number;
    remainingTime: number;
    onReset: () => void;
  }

  interface TimeChallengeProps {
    title: string;
    targetTime: number;
  }
}
