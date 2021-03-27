import React, { FC, memo } from "react";
import { TouchableOpacity } from "react-native";
import styles from "./RectangleButton.styles";
import type { RectangleButtonProps } from "./RectangleButton.types";

const RectangleButton: FC<RectangleButtonProps> = memo(
  ({ children, style, ...props }) => {
    return (
      <TouchableOpacity style={[styles.container, style]} {...props}>
        {children}
      </TouchableOpacity>
    );
  }
);

export default RectangleButton;
