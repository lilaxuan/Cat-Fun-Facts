import axios from 'axios';
import CatLogo from './assets/cat.svg'
import './CatFacts.css';
import { useState } from 'react';

// Jiaxuan Li

function CatFacts() {
    const [catFacts, setCatFacts] = useState('');

    // you may need to add other code elsewhere!

    function generateCatFact() {
        axios.get('https://catfact.ninja/fact')
            .then(response => {
                // insert code here
                console.log(response.data.fact);
                setCatFacts(response.data.fact);
            })
    }



    return (
        <div className="App">
            <div className='catFactsText'>
                {/* {"Loading..."} */}
                {/* The cat fact should be displayed here*/}
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
