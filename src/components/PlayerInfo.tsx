import React, { useState } from "react";

const PlayerInfo = ({name , symbol , isActive}) =>{

    const [isEditing , setisEditing] = useState(false)

    const [playerName , setPlayername] = useState(name)

    const handleEditClick = () =>{
        setisEditing((editable) => !editable)
    }

    const updateName = (event) =>{
        setPlayername(event.target.value)
    }

    let playernameOrInput = <span className="player-name">{playerName}</span>

    if(isEditing){
        playernameOrInput = <input type="text" required value={playerName} onChange={updateName}/>
    }

    return(
        <li className={isActive ? 'active' : undefined}>
              <span className="players">
                {playernameOrInput}
              <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
              
            </li>
    )

}


export default PlayerInfo;