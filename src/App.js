import "./App.css";
import { useState } from "react";
import Signup from "./Signup.js";

function App() {
  const [openSignUpModal, setopenSignUpModal] = useState(false);

  return (
    <div>
      <h1 align="center"> User Detail Modal</h1>
      

      <button
        className="main-btn"
        onClick={() => setopenSignUpModal((prev) => (prev = !prev))}
      >Open Form</button>
      <Signup
        openSignUpModal={openSignUpModal}
        
      />
    </div>
  );
}

export default App;
