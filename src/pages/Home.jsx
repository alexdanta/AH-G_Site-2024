// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Tag from '../components/Tag';

import './Home.css'
import HomeVideo from '../assets/WebLand4k16x92.mp4'

function HomePage() {
    const [count, setCount] = useState(0);

    return (
        <div className='page'>
            <Tag />

            <div className='content'>
                <video className='home-video' src={HomeVideo} alt="Video of Alexanders Work" muted autoPlay loop></video>
                <h1>Design + Art Direction.</h1>
                <h2>Concerts & Live Events</h2>

                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>

                <div>
                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                </div>

            </div>




        </div>
    );
}

export default HomePage;
