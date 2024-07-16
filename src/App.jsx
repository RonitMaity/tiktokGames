import PlayerInfo from "./components/PlayerInfo"
import { Gameboard } from "./components/GameBoard"
import { useState } from "react"

function App() {

  const [activeplayer , setActiveplayer] = useState('X')

  const handleActivePlayer = () =>{
    setActiveplayer((active)=> active === "X" ? "O" : "X")
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
