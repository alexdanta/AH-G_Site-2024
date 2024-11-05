import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ahgLogo from '/ah-gLogo.svg'
import ahgLogoAnim from './assets/ah-gWriteOn.json'
import Navbar from './Navbar'
import './App.css'
import Lottie from 'react-lottie-player'
import { FontAwesomeIcon } from '@fontawsesome/react-fontawsesome'
import Message from './topCorner'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>

      <Navbar />


      <div className='page'>

        <div className='Tag'>

          <div className='TagSection1'>
            <h1>Assignment</h1>
            <h1>Unit</h1>
          </div>
          <div className='TagSection2'>
            <div className="tag-row">
              <h1>DR.BY</h1>
              <Lottie
                loop={false}
                play={false}                     // Keeps the animation paused
                animationData={ahgLogoAnim}      // Reference the imported animation data
                goTo={100}
                className='TagLogo'                       // Set halfway point (adjust as needed)

              />
            </div>
            <div className="tag-row">
              <h1>CH.BY</h1>
            </div>
          </div>



          <div className='TagSection3'><h1>RATING</h1></div>

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
