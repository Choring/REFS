export {};

declare global {
  interface ModalProps {
    open: () => void;
  }

  interface ResultProps {
    result: string;
    targetTime: number;
  }

  interface TimeChallengeProps {
    title: string;
    targetTime: number;
  }
}
