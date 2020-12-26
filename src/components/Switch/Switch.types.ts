export interface ISwitch {
  title: string;
  value: boolean;
  onValueChange: (isEnabled: boolean) => void;
}
