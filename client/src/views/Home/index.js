import React, { useState } from 'react'
import api from '../../utils/api'

const HomeView = () => {
    const [baseURL, setBaseURL] = useState("");
    const [shortURL, setShortURL] = useState(null);

    const handleShortenClick = () => {
        api.post('/url/s', { baseURL })
            .then((res) => {
                setShortURL(`http://localhost:3000/r/${res.data.shortURL}`);
                setBaseURL("");
            })
            .catch((err) => console.error(err))
    }

    return (
        <div className="display-middle">
            <input 
                type="text"
                placeholder="Enter the URL you want to shorten" 
                className="search"
                value={baseURL}
                onChange={(e) => setBaseURL(e.target.value)}
            />
            <div className="align-left mt-1">
                <button className="btn-primary" onClick={handleShortenClick}>
                    Shorten
                </button>
            </div>
            <div className="result">
                {shortURL && <a href={shortURL}>{shortURL}</a>}
            </div>
        </div>
    )
}

export default HomeView;
