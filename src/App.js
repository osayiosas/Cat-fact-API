
import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';



function App()
{

  const [catFact, setCatFact] = useState("")

  Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact);
  });

  useEffect(() => {});
  
  
  return (
    <div className="App">
      <button>Generate Cat Facts</button>
      <p>{catFact} </p>
    </div>
  );
}

export default App;
