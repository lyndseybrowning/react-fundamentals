// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = useRef()
  const [username, setUsername] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    onSubmitUsername(usernameRef.current.value)
  }

  const handleChange = e => {
    const { value } = e.target

    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" ref={usernameRef} onChange={handleChange} value={username} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
