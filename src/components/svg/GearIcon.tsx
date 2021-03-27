import React, { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { colors } from "themes";

const GearIcon = memo((props: SvgProps) => {
  return (
    <Svg
      width={32}
      height={34}
      viewBox="0 0 32 34"
      fill={colors.black}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0166 0.500122H14.9787C13.8311 0.500122 12.7307 0.948181 11.9211 1.74517C11.2036 2.45158 10.7646 3.38294 10.68 4.374L10.6659 4.69411C10.6503 5.73643 9.80823 6.54959 8.77466 6.54949C8.54027 6.54704 8.29683 6.49355 8.07271 6.39277L7.85287 6.27795C5.82206 5.1369 3.18161 5.83583 1.99014 7.86186L0.918823 9.5866C-0.22034 11.5229 0.341509 13.9555 2.1804 15.2084L2.43614 15.3691C3.06645 15.727 3.42678 16.3384 3.42678 17.0001C3.42678 17.6087 3.1216 18.1777 2.61264 18.5228L2.43889 18.6294C0.533745 19.7082 -0.216908 22.089 0.740741 24.0694L0.880701 24.333L1.9323 26.1121C2.4789 27.0788 3.41555 27.8071 4.52334 28.1156C5.50522 28.389 6.55309 28.3134 7.48207 27.904L7.77582 27.7603C8.27022 27.4803 8.78099 27.4131 9.26037 27.5388C9.73975 27.6645 10.148 27.9726 10.3945 28.3946C10.5303 28.6192 10.6101 28.8508 10.6385 29.0908L10.6525 29.3344C10.6501 31.6014 12.5881 33.5001 14.9787 33.5001H17.0171C19.2744 33.5001 21.1479 31.8012 21.3312 29.6085L21.3445 29.3253C21.3433 28.7776 21.541 28.3066 21.895 27.9598C22.2489 27.613 22.7297 27.4192 23.2303 27.4216C23.4604 27.4279 23.7132 27.4843 23.9474 27.5869L24.172 27.7003C26.0667 28.7719 28.5496 28.2214 29.8284 26.4198L29.9925 26.1692L31.0808 24.3928C31.6668 23.4076 31.8254 22.25 31.5296 21.1631C31.2674 20.1997 30.6663 19.3592 29.8342 18.7889L29.5587 18.616C29.0799 18.3448 28.7643 17.9419 28.6357 17.4693C28.5071 16.9967 28.576 16.4934 28.8273 16.0708C28.9665 15.8329 29.1515 15.6348 29.3735 15.4832L29.798 15.2219C31.5171 14.0784 32.1609 11.8277 31.256 9.93551L31.1622 9.75125C31.1419 9.70319 31.1184 9.65633 31.0917 9.61099L30.08 7.89093C28.9543 5.97677 26.5203 5.23393 24.4908 6.16869L24.2205 6.30546C23.7356 6.58347 23.2235 6.65374 22.7414 6.5311C22.2593 6.40846 21.8468 6.10298 21.5948 5.68202C21.4655 5.46854 21.3857 5.23693 21.3573 4.99695L21.3433 4.75326C21.3788 3.7171 20.9376 2.60685 20.1221 1.78499C19.3067 0.963136 18.1864 0.499651 17.0166 0.500122ZM14.9788 2.88894H17.0171C17.5285 2.88873 18.0178 3.09115 18.3739 3.45008C18.73 3.80902 18.9227 4.2939 18.908 4.79427L18.9297 5.21016C19.0034 5.8459 19.1939 6.39898 19.4949 6.89583C20.0711 7.85859 21.0198 8.56118 22.1286 8.84324C23.2374 9.12531 24.4152 8.96369 25.4022 8.39401L25.5725 8.30905L25.7556 8.23718C26.5614 7.97224 27.5111 8.30756 27.9675 9.0836L28.9324 10.7256L28.9533 10.7719L29.07 10.9922C29.4604 11.811 29.1341 12.8466 28.2893 13.3308L28.024 13.4944C27.4615 13.8773 27.0301 14.339 26.7161 14.876C26.1427 15.8403 25.984 16.9979 26.2799 18.0849C26.5488 19.073 27.1732 19.9285 28.0322 20.4974L28.4815 20.7756C28.7984 20.9943 29.0598 21.3597 29.1738 21.7786C29.3024 22.2512 29.2334 22.7545 28.9821 23.1771L27.9189 24.9131L27.7993 25.0962C27.3073 25.7877 26.3367 26.0445 25.5184 25.6926L24.9971 25.4317C24.4156 25.1754 23.8467 25.0485 23.2688 25.0333C22.0908 25.0275 20.985 25.4731 20.171 26.2707C19.3569 27.0683 18.902 28.1516 18.9075 29.2796L18.8982 29.4595C18.8213 30.369 18.0026 31.1114 17.0171 31.1114H14.9788C14.0043 31.1114 13.202 30.389 13.0994 29.461L13.0661 28.8776C12.9924 28.2419 12.8019 27.6888 12.501 27.192C11.9415 26.2335 10.9982 25.5217 9.89066 25.2313C8.78312 24.9409 7.60308 25.096 6.61282 25.6621L6.43343 25.7482C6.07638 25.9042 5.61871 25.9372 5.1899 25.8178C4.70609 25.6831 4.29702 25.3651 4.05321 24.934L3.01495 23.1793L2.92207 23.0034C2.52878 22.1878 2.85534 21.152 3.70154 20.6724L3.95862 20.514C5.16631 19.6963 5.86494 18.3937 5.86494 17.0002C5.86494 15.586 5.14624 14.2721 3.96152 13.4873L3.53134 13.2204C2.77123 12.7014 2.52572 11.6384 3.01662 10.8037L4.08794 9.07892C4.62309 8.16961 5.77627 7.86437 6.68063 8.37208L6.99804 8.53609C7.59086 8.80449 8.1722 8.93223 8.76188 8.93823C11.0495 8.93852 12.9201 7.2171 13.0908 5.02364L13.113 4.52057C13.1465 4.14238 13.3373 3.73741 13.6493 3.43027C14.0013 3.08375 14.4797 2.88894 14.9788 2.88894ZM16.0053 11.6076C12.9656 11.6076 10.5013 14.0219 10.5013 17.0001C10.5013 19.9783 12.9656 22.3926 16.0053 22.3926C19.0451 22.3926 21.5093 19.9783 21.5093 17.0001C21.5093 14.0219 19.0451 11.6076 16.0053 11.6076ZM16.0053 13.9964C17.6986 13.9964 19.0712 15.3412 19.0712 17.0001C19.0712 18.659 17.6986 20.0038 16.0053 20.0038C14.3121 20.0038 12.9395 18.659 12.9395 17.0001C12.9395 15.3412 14.3121 13.9964 16.0053 13.9964Z"
      />
    </Svg>
  );
});

export { GearIcon };