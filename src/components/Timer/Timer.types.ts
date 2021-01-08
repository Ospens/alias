export interface TimerProps {
  seconds: number;
  onExpire?: () => void;
}
