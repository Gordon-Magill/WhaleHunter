// Single monster object
import React from "react";
import { Link, useNavigate} from "react-router-dom";

import { useUserStateContext, useUserDispatchContext} from "../utils/userContext";
import { LOAD_MONSTER } from "../utils/actions";


function MonsterObject({monsterObj}) {

  const state = useUserStateContext();
  const dispatch = useUserDispatchContext();
  const navigate = useNavigate();


  const {
    monsterID,
    name,
    attackPower,
    health,
    armor,
    shield,
    accuracy,
    evasion,
    imagePath,
    expGrant,
  } = monsterObj;
  console.log(monsterObj)


  return (
    <div className="monsterCard">
      <Link onClick={() => {
        dispatch({
          type: LOAD_MONSTER,
          payload: monsterObj,
        })
        navigate("/battle")
      }}
      className="relative" >
        <img src={imagePath} className="rounded-full p-2"></img>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-slate-800/75 rounded-full">{name}{monsterID}</p>
      </Link>
    </div>
  );
}

export default MonsterObject;
