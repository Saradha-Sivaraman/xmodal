import './App.css';
import { useState } from 'react';
import Signup from './Signup.js';

function App() {
    const [openSignUpModal, setopenSignUpModal] = useState(false);

 
    return (
        <div>
            <h1 align="center"> User Detail Modal</h1>
            <Signup openSignUpModal={openSignUpModal}
                setopenSignUpModal={setopenSignUpModal} />
                
            <button className='main-btn' id="myModal"
                onClick={() => setopenSignUpModal(true)}>
              Open Form
            </button>
        </div>
    );
}

export default App;