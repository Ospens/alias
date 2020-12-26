export interface ISwitch {
  value: boolean;
  onValueChange: (isEnabled: boolean) => void;
}
