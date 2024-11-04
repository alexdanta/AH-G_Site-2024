import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ahgLogo from '/ah-gLogo.svg'
import './App.css'
import Message from './topCorner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='nav'>


        <a className="logo">
          <img src={ahgLogo} alt="AH-G logo" />
          <p className='logoName'>AH-G .</p>
        </a>


        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='page'>

        <div>
          <h1>tag on the left</h1>
        </div>

        <div>

          <h1>Design + Art Direction: Live Events & Concerts/ Virtual Production/ webGL Development
            I am Alexander and I create immersive experiences.</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </div>

        <div>

          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>

      </div>
    </>
  )
}

export default App
