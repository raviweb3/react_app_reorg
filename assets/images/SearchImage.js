import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const SearchImage = props => (
    <Svg width={22} height={22} {...props}>
    <G fill="none">
      <Path
        fill="#FFC939"
        d="M19.26 14.798c3.334-3.335 3.334-8.762 0-12.097-3.336-3.335-8.762-3.335-12.098 0-2.829 2.83-3.257 7.038-1.286 10.324 0 0 .141.237-.05.428l-4.364 4.365c-.869.868-1.075 2.083-.305 2.853l.133.133c.77.77 1.985.563 2.853-.305l4.355-4.355c.2-.2.438-.059.438-.059 3.286 1.971 7.494 1.543 10.323-1.287zM8.741 13.22a6.327 6.327 0 010-8.938 6.327 6.327 0 018.938 0 6.327 6.327 0 010 8.938 6.328 6.328 0 01-8.938 0z"
      />
      <Path
        fill="#FFF"
        d="M9.288 8.242a.882.882 0 01-.813-1.227 5.564 5.564 0 017.284-2.952.883.883 0 01-.688 1.626 3.796 3.796 0 00-4.97 2.014.883.883 0 01-.813.54z"
      />
    </G>
  </Svg>
)

export default SearchImage
