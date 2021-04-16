import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { colors } from "themes";

const ArrowIcon = memo((props: SvgProps) => {
  return (
    <Svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill={colors.black}
      stroke={colors.black}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2928 8.82285C17.6922 8.76787 18 8.42047 18 8.00011C18 7.54154 17.6337 7.16979 17.1818 7.16979L2.80007 7.16979L7.99531 1.91866L8.07472 1.8257C8.31304 1.50114 8.28757 1.0398 7.9977 0.744412C7.67884 0.419481 7.1608 0.418393 6.84062 0.741981L0.25226 7.40045C0.213041 7.43858 0.177555 7.48063 0.146416 7.52599C-0.0766354 7.85024 -0.0452156 8.30006 0.240669 8.58894L6.84067 15.2581L6.9326 15.3383C7.25342 15.5787 7.7079 15.551 7.99775 15.2555C8.31658 14.9306 8.31546 14.4049 7.99526 14.0813L2.79877 8.83043L17.1818 8.83043L17.2928 8.82285Z"
      />
    </Svg>
  );
});

export { ArrowIcon };
