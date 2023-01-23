import React from "react";
import { Link } from "react-router-dom";

function MonsterObject(monsterObj) {
  const {
    _id,
    name,
    attackPower,
    health,
    armor,
    shield,
    accuracy,
    evasion,
    expGrant,
  } = monsterObj;

  return (
    <div className="card px-1 py-1">
      <Link to={`/battle/${_id}`}>
        <p>{name}</p>
      </Link>
      <div>
        <div><p>{health}</p></div>
      </div>
    </div>
  );
}

export default MonsterObject;
