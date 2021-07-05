import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { colors } from "themes";

const PauseIcon = memo((props: SvgProps) => {
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
        d="M0 15C0 6.71668 6.71668 0 15 0C23.2843 0 30 6.71618 30 15C30 23.2838 23.2843 30 15 30C6.71668 30 0 23.2833 0 15ZM27.75 15C27.75 7.95878 22.0417 2.25 15 2.25C7.95933 2.25 2.25001 7.95932 2.25001 15C2.25001 22.0407 7.95933 27.75 15 27.75C22.0417 27.75 27.75 22.0412 27.75 15ZM18.0001 7.49961C18.7595 7.49961 19.3871 8.21464 19.4864 9.14235L19.5001 9.40026V20.5989C19.5001 21.6486 18.8285 22.4996 18.0001 22.4996C17.2407 22.4996 16.6131 21.7846 16.5138 20.8568L16.5001 20.5989V9.40026C16.5001 8.35056 17.1717 7.49961 18.0001 7.49961ZM13.4866 9.14235C13.3872 8.21464 12.7596 7.49961 12.0003 7.49961C11.1718 7.49961 10.5003 8.35056 10.5003 9.40026V20.5989L10.5139 20.8568C10.6133 21.7846 11.2409 22.4996 12.0003 22.4996C12.8287 22.4996 13.5003 21.6486 13.5003 20.5989V9.40026L13.4866 9.14235Z"
      />
    </Svg>
  );
});

PauseIcon.displayName = "PauseIcon";

export { PauseIcon };
