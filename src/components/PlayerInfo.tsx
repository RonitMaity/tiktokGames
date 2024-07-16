import React, { useState } from "react";

const PlayerInfo = ({name , symbol}) =>{

    const [isEditing , setisEditing] = useState(false)

    const [playerName , setPlayername] = useState(name)

    const handleEditClick = () =>{
        setisEditing((editable) => !editable)
    }

    const updateName = (event) =>{
        console.log(event.target.value)
        setPlayername(event.target.value)
    }

    let playernameOrInput = <span className="player-name">{playerName}</span>

    if(isEditing){
        playernameOrInput = <input type="text" required value={playerName} onChange={updateName}/>
    }

    return(
        <li>
              <span className="players">
                {playernameOrInput}
              <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
              
            </li>
    )

}


export default PlayerInfo;