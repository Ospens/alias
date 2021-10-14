import React, { FC, memo, useMemo } from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./RectangleButton.styles";
import type { RectangleButtonProps } from "./RectangleButton.types";

const RectangleButton: FC<RectangleButtonProps> = memo(
  ({ children, style, title, textStyle, isSquare, disabled, ...props }) => {
    const containerStyle = useMemo(() => {
      const containerStyles: StyleProp<ViewStyle>[] = [styles.container];
      if (isSquare) {
        containerStyles.push(styles.square);
      }
      if (disabled) {
        containerStyles.push(styles.disabled);
      }
      return StyleSheet.flatten([...containerStyles, style]);
    }, [isSquare, disabled, style]);

    const combineTitleStyle = useMemo(() => {
      const titleStyle = [styles.title, textStyle];
      if (disabled) {
        titleStyle.push(styles.disabledTitle);
      }
      return StyleSheet.flatten(titleStyle);
    }, [disabled, textStyle]);

    return (
      <TouchableOpacity style={containerStyle} disabled={disabled} {...props}>
        {title ? <Text style={combineTitleStyle}>{title}</Text> : children}
      </TouchableOpacity>
    );
  },
);

RectangleButton.displayName = "RectangleButton";

export default RectangleButton;
