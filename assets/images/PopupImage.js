import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const PopupImage = props => (
  <Svg width={20} height={20} {...props}>
    <G fill="none">
      <Path
        fill="#FFF"
        d="M19.144.416a.602.602 0 00-.48-.174l-4.666.425a.602.602 0 00-.37 1.023L14.9 2.963 8.537 9.325a.6.6 0 000 .849l.848.848a.6.6 0 00.85.001l6.363-6.363 1.274 1.273a.603.603 0 00.848 0 .593.593 0 00.173-.371l.425-4.667a.602.602 0 00-.174-.479z"
      />
      <Path
        fill="#FFC939"
        d="M16.92 7.44v9.6H2.52V2.64h9.6V.24H1.32C.656.24.12.776.12 1.44v16.8a1.2 1.2 0 001.2 1.2h16.8a1.2 1.2 0 001.2-1.2V7.44h-2.4z"
      />
    </G>
  </Svg>
)

export default PopupImage