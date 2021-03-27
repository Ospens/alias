import React, { FC, memo, useMemo } from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./MainLayout.styles";
import type { MainLayoutProps } from "./MainLayout.types";

const MainLayout: FC<MainLayoutProps> = memo(
  ({ children, style, bottomPanel }) => {
    const childrenStyle = useMemo(() => [styles.childrenWrapper, style], [
      style,
    ]);

    return (
      <SafeAreaView style={styles.container}>
        <View style={childrenStyle}>{children}</View>

        <View style={styles.bottomPanelWrapper}>{bottomPanel}</View>
      </SafeAreaView>
    );
  }
);

export default MainLayout;
