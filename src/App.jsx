import { useState } from 'react'
// import Audio from './components/audio/Audio'
import Editor from './components/editor/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Audio /> */}
      <Editor />
    </>
  )
}

export default App
