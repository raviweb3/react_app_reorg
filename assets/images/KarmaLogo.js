import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const KarmaLogo = props => (
  <Svg width={20} height={20} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-2.2-2.6h24.96v24.96H-2.2z" />
      <Path
        fill="#F6BA26"
        d="M10.28.28a9.6 9.6 0 110 19.2 9.6 9.6 0 010-19.2zm0 2.88a6.72 6.72 0 100 13.44 6.72 6.72 0 000-13.44z"
      />
    </G>
  </Svg>
)

export default KarmaLogo
