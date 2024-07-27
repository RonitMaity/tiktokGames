import PlayerInfo from "./components/PlayerInfo"
import { Gameboard } from "./components/GameBoard"
import { useState } from "react"

function App() {

  const [activeplayer , setActiveplayer] = useState('X')
  const [ turns , setTurns] = useState([])

  const handleActivePlayer = (rowIndex , colIndex ) =>{
    setActiveplayer((active)=> active === "X" ? "O" : "X")

    setTurns((prevTurn) =>{
      let player = "X"
      if(prevTurn[0]?.player === "X")[
        player = "O"
      ]
      const newTurn = [{ square : { row : rowIndex , col : colIndex }  , player : player}  , ...prevTurn]

      return newTurn
    })


    console.log(turns)
  }
  

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name="Player 1" symbol="X" isActive={activeplayer === "X"}/>
        <PlayerInfo name="Player 2" symbol="O" isActive={activeplayer === "O"}/>
          </ol>
        <div>
        <Gameboard handleActivePlayer={handleActivePlayer} activePlayerSymbol = {activeplayer}/>
        </div>
        
      </div>

      Logs
    </main>
  )
}

export default App
