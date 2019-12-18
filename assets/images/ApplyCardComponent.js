import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ApplyCardComponent = props => (
  <Svg width={14} height={13} {...props}>
    <Path
      fill="#FFF"
      d="M12.526 6.126H7.474V1.074a.594.594 0 10-1.188 0v5.052H1.234a.594.594 0 100 1.188h5.052v5.052a.594.594 0 101.188 0V7.314h5.052a.594.594 0 100-1.188z"
    />
  </Svg>
)

export default ApplyCardComponent
