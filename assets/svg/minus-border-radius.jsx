import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
  return (
    <Svg
      width={80}
      height={160}
      viewBox="0 0 80 160"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M80 160c0-44.183-35.817-80-80-80 44.183 0 80-35.817 80-80z"
        fill={props.color}
        fillRule="evenodd"
        opacity={0.95}
      />
    </Svg>
  );
}

export default SvgComponent;
