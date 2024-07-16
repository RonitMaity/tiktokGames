import React from "react";

const PlayerInfo = ({name , symbol}) =>{

    return(
        <li>
              <span className="players">
              <span className="player-name">{name}</span>
              <span className="player-symbol">{symbol}</span>
              </span>
              <button>Edit</button>
            </li>
    )

}


export default PlayerInfo;