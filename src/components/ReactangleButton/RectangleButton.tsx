import React, { FC, memo, useMemo } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import styles from "./RectangleButton.styles";
import type { RectangleButtonProps } from "./RectangleButton.types";

const RectangleButton: FC<RectangleButtonProps> = memo(
  ({ children, style, title, textStyle, isSquare, ...props }) => {
    const containerStyle = useMemo(() => {
      const containerStyles: StyleProp<ViewStyle>[] = [styles.container];
      if (isSquare) {
        containerStyles.push(styles.square);
      }
      return StyleSheet.flatten([...containerStyles, style]);
    }, [style, isSquare]);
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
