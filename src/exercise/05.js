// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({ size, backgroundColor, children }) => {
  return (
    <div className={`box box--${size}`} style={{ fontStyle: "italic", backgroundColor }}>{children}</div>
  )
};

function App() {
  return (
    <div>
      <Box size="small" backgroundColor="lightblue">small lightblue box</Box>
      <Box size="medium" backgroundColor="pink">medium pink box</Box>
      <Box size="large" backgroundColor="orange">large orange box</Box>
    </div>
  )
}

export default App
