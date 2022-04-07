import React, { FC, memo, useMemo, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { BannerAd, BannerAdSize, TestIds } from "@react-native-admob/admob";
import { requestTrackingPermission } from "react-native-tracking-transparency";
import styles from "./MainLayout.styles";
import type { MainLayoutProps } from "./MainLayout.types";

const MainLayout: FC<MainLayoutProps> = memo(({ children, style, bottomPanel }) => {
  const childrenStyle = useMemo(() => [styles.childrenWrapper, style], [style]);

  useEffect(() => {
    requestTrackingPermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={childrenStyle}>{children}</View>
      <BannerAd size={BannerAdSize.ADAPTIVE_BANNER} unitId={TestIds.BANNER} />
      <View style={styles.bottomPanelWrapper}>{bottomPanel}</View>
    </SafeAreaView>
  );
});

MainLayout.displayName = "MainLayout";

export default MainLayout;
