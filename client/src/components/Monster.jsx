// Single monster object
import React from "react";
import { Link, useNavigate} from "react-router-dom";

import { useUserStateContext, useUserDispatchContext} from "../utils/userContext";
import { LOAD_MONSTER } from "../utils/actions";


function MonsterObject(monsterObj) {

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
    imageID,
    expGrant,
  } = monsterObj;

  return (
    <div className="card px-1 py-1">
      <Link onClick={() => {
        dispatch({
          type: LOAD_MONSTER,
          payload: monsterObj,
        })
        navigate("/battle")
      }} >
        <p>{name}{monsterID}</p>
      </Link>
    </div>
  );
}

export default MonsterObject;
