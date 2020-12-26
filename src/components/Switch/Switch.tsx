import React, { FC, memo } from "react";
import { Switch as RNSwitch } from "react-native";
import { ISwitch } from "components/Switch/Switch.types";

const Switch: FC<ISwitch> = memo(({ onValueChange, value = false }) => {
  return (
    <RNSwitch
      ios_backgroundColor="#3e3e3e"
      onValueChange={onValueChange}
      value={value}
    />
  );
});

export default Switch;
