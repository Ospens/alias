import React, { FC, memo, useMemo } from "react";
import { SafeAreaView } from "react-native";
import styles from "./MainLayout.styles";
import type { MainLayoutProps } from "./MainLayout.types";

const MainLayout: FC<MainLayoutProps> = memo(({ children, style }) => {
  const wrapperStyle = useMemo(() => [styles.container, style], [style]);

  return <SafeAreaView style={wrapperStyle}>{children}</SafeAreaView>;
});

export default MainLayout;
