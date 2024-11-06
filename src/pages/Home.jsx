// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Tag from '../components/Tag';
import '../App.css';

function HomePage() {
    const [count, setCount] = useState(0);

    return (
        <div className='page'>
            <Tag />

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

            <div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </div>
    );
}

export default HomePage;
