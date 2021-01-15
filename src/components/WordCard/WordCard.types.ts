export interface WordCardProps {
  word: string;
  onGuess: (word: string) => void;
  onDecline: (word: string) => void;
}
