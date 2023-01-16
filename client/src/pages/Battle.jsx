import React from "react";
import { battle } from "../components/battle"
// import user's ship as attacker
// import random monster as defender


export default function Battle() {
  return (
    <div className="battle">
      <h1>FIGHT!!!</h1>
      <div>
        <button
          type="primary"
          // battle(attacker, defender)
          onClick={() => battle()}
          >Start battle
        </button>

        <button
          type="primary"
          >Next Round
        </button>

        <button
          type="primary"
          >Retreat!
        </button>
      </div>

    </div>
  );
}
