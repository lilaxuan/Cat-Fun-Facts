import axios from 'axios';
import CatLogo from './assets/cat.svg'
import './CatFacts.css';
import { useState, useEffect } from 'react';

// Jiaxuan Li

function CatFacts() {
    const [catFacts, setCatFacts] = useState('');

    // Using promise
    // function generateCatFact() {
    //     setCatFacts('Loading...');

    //     axios.get('https://catfact.ninja/fact')
    //         .then(response => {
    //             setCatFacts(response.data.fact);
    //         })
    // }

    // Using async && await
    const generateCatFact = async () => {
        setCatFacts('Loading...');

        try {
            const response = await axios.get('https://catfact.ninja/fact');
            setCatFacts(response.data.fact);
        } catch (error) {
            setCatFacts('Failed to fetch cat fact. Please try again later.');
            console.error('Error fetching cat fact:', error);
        }
    }

    // When the page loads, call the generateCatFact once
    useEffect(() => {
        generateCatFact();
    }, []);



    return (
        <div className="App">
            <div className='catFactsText'>
                {catFacts}
            </div>
            <div>
                <button onClick={generateCatFact} className="catFactBtn">
                    Click me for a cat fact!
                </button>
            </div>
            <div>
                <img src={CatLogo} className="catFactImg" />
            </div>
        </div>
    )
}

export default CatFacts
