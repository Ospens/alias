import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { colors } from "themes";

const CloseIcon = memo((props: SvgProps) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill={colors.black} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.335 0h-8.67C2.268 0 0 2.433 0 5.916v8.168C0 17.571 2.262 20 5.665 20h8.669C17.738 20 20 17.57 20 14.084V5.916C20 2.43 17.738 0 14.335 0zm-8.67 1.5h8.67c2.55 0 4.165 1.735 4.165 4.416v8.168c0 2.681-1.615 4.416-4.166 4.416H5.665c-2.55 0-4.165-1.734-4.165-4.416V5.916C1.5 3.24 3.12 1.5 5.665 1.5zm1.406 5.562a.75.75 0 01.976-.072l.084.073L10 8.93l1.866-1.866a.75.75 0 011.133.976l-.072.084-1.866 1.866 1.867 1.869a.75.75 0 01-.976 1.133l-.084-.073-1.868-1.868-1.865 1.865A.75.75 0 017 11.941l.072-.084L8.938 9.99 7.071 8.123a.75.75 0 010-1.06z"
      />
    </Svg>
  );
});

CloseIcon.displayName = "CloseIcon";

export { CloseIcon };
