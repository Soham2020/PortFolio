import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [ loading, setLoading ] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {
        loading ?
          <div className="loader">
            <PropagateLoader color={"#50E3C2"} loading={loading} size={10} />
          </div> : <Home />
      }
    </>
  );
}

export default App;
