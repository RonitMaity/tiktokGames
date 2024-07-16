import React, { useState } from "react"

const initialboard = [
    ["" , "" , ""],
    ["" , "" , ""],
    ["" , "" , ""],
]

export const Gameboard = ({handleActivePlayer , activePlayerSymbol}) => {

    const [gameBoardArray , setGameBoard] = useState(initialboard)

    const handleClick = (rowIndex,colindex) =>{
        
        setGameBoard((prevGameboard) =>{
            const newgameBoard = [...prevGameboard.map(inner => [...inner])]
            newgameBoard[rowIndex][colindex] = activePlayerSymbol;
            return newgameBoard;
        })

        handleActivePlayer();

    }
    
    return (
        <ol id="game-board">
            {gameBoardArray.map((row , rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col , colIndex) => <li key={colIndex}>
                        <button onClick={() => handleClick(rowIndex , colIndex)}>{col}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}