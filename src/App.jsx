import StartGame from "./components/StartGame";

import styled from "styled-components";
import './App.css'
import { useState } from "react";
import GamePlay from "./components/GamePlay";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () =>{
      setIsGameStarted((prev) =>{!prev})
  }

  return (
    <>{isGameStarted ? <GamePlay/> : <StartGame toggle=
    {toggleGamePlay} />} </>
  )
}

export default App
const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px;`