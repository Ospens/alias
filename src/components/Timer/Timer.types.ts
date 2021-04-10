export interface TimerProps {
  seconds: number;
  onExpire?: () => void;
}

export interface TimerRef {
  start: () => void;
  pause: () => void;
}
