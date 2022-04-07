import React, { FC, memo, useEffect, useState } from "react";
import { BannerAd, BannerAdSize, TestIds } from "@react-native-admob/admob";
import { requestTrackingPermission } from "react-native-tracking-transparency";
import styles from "./AdBanner.styles";
import type { AdBannerProps } from "./AdBanner.types";

const AdBanner: FC<AdBannerProps> = memo(() => {
  const [isAdLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    requestTrackingPermission();
  }, []);

  return (
    <BannerAd
      onAdLoaded={() => setIsLoaded(true)}
      size={BannerAdSize.ADAPTIVE_BANNER}
      unitId={TestIds.BANNER}
      style={isAdLoaded && styles.container}
    />
  );
});

AdBanner.displayName = "AdBanner";

export default AdBanner;
