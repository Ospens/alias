import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { colors } from "themes";

const CheckBoxCheckedIcon = memo((props: SvgProps) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill={colors.black}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3344 0.000244141H5.66537C2.26779 0.000244141 0.000366211 2.43284 0.000366211 5.91624V14.0842C0.000366211 17.5709 2.26174 20.0002 5.66537 20.0002H14.3334C17.738 20.0002 20.0004 17.5709 20.0004 14.0842V5.91624C20.0004 2.42975 17.7381 0.000244141 14.3344 0.000244141ZM5.66537 1.50024H14.3344C16.8849 1.50024 18.5004 3.23521 18.5004 5.91624V14.0842C18.5004 16.7654 16.8847 18.5002 14.3334 18.5002H5.66537C3.11513 18.5002 1.50037 16.7656 1.50037 14.0842V5.91624C1.50037 3.23862 3.12071 1.50024 5.66537 1.50024ZM14.0902 7.09691C13.7973 6.80402 13.3224 6.80402 13.0295 7.09691L8.81297 11.312L6.97008 9.4698L6.88595 9.3972C6.59229 9.17941 6.17563 9.2037 5.90942 9.47003C5.61659 9.76298 5.61669 10.2379 5.90965 10.5307L8.28365 12.9037L8.36777 12.9763C8.66138 13.194 9.07797 13.1698 9.3442 12.9036L14.0902 8.15757L14.1628 8.07346C14.3807 7.77984 14.3565 7.36318 14.0902 7.09691Z"
      />
    </Svg>
  );
});

export { CheckBoxCheckedIcon };