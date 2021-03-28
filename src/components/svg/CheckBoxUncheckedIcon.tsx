import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { colors } from "themes";

const CheckBoxUncheckedIcon = memo((props: SvgProps) => {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill={colors.black}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.49808 0.000366211H21.5016C26.6073 0.000366211 30.0006 3.64462 30.0006 8.87437V21.1264C30.0006 26.3564 26.607 30.0004 21.5001 30.0004H8.49808C3.39263 30.0004 0.000579834 26.3564 0.000579834 21.1264V8.87437C0.000579834 3.64926 3.40172 0.000366211 8.49808 0.000366211ZM21.5016 2.25037H8.49808C4.68109 2.25037 2.25058 4.85792 2.25058 8.87437V21.1264C2.25058 25.1483 4.67272 27.7504 8.49808 27.7504H21.5001C25.3272 27.7504 27.7506 25.1481 27.7506 21.1264V8.87437C27.7506 4.85281 25.3273 2.25037 21.5016 2.25037Z"
      />
    </Svg>
  );
});

export { CheckBoxUncheckedIcon };
