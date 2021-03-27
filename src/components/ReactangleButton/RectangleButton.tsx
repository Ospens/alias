import React, { FC, memo, useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./RectangleButton.styles";
import type { RectangleButtonProps } from "./RectangleButton.types";

const RectangleButton: FC<RectangleButtonProps> = memo(
  ({ children, style, title, ...props }) => {
    const containerStyle = useMemo(() => [styles.container, style], [style]);

    return (
      <TouchableOpacity style={containerStyle} {...props}>
        {title ? <Text style={styles.title}>{title}</Text> : children}
      </TouchableOpacity>
    );
  }
);

export default RectangleButton;
