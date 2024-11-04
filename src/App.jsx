import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ahgLogo from '/ah-gLogo.svg'
import ahgLogoAnim from './assets/ah-gWriteOn.json'
import Navbar from './Navbar'
import './App.css'
import Lottie from 'react-lottie-player'
import Message from './topCorner'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>

      <Navbar />


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
