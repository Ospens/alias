import React, { FC, memo, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "./RectangleButton.styles";
import type { RectangleButtonProps } from "./RectangleButton.types";

const RectangleButton: FC<RectangleButtonProps> = memo(
  ({ children, style, title, textStyle, ...props }) => {
    const containerStyle = useMemo(
      () => StyleSheet.flatten([styles.container, style]),
      [style]
    );
    const combineTitleStyle = useMemo(
      () => StyleSheet.flatten([styles.title, textStyle]),
      [textStyle]
    );

    return (
      <TouchableOpacity style={containerStyle} {...props}>
        {title ? <Text style={combineTitleStyle}>{title}</Text> : children}
      </TouchableOpacity>
    );
  }
);

export default RectangleButton;
