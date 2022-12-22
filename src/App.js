import React, { useRef } from "react";
import './App.css';

function App() {
  const changeRef = useRef();
  console.log(changeRef);
  const changeDiv = () => {
    changeRef.current.style.backgroundColor = "red";
    changeRef.current.style.width = "100px";
    changeRef.current.style.height = "100px";
    changeRef.current.style.borderRadius = "50%";
  }
  return (
    <>
      <div ref={changeRef} style={{width:"50px", height:"50px",border:"1px solid black"}}></div>
      <button onClick={changeDiv} >Change</button>
    </>
  );
}

export default App;
