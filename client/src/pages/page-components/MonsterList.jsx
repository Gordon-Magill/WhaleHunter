import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

// Importing content for userReducer
import { useUserStateContext, useUserDispatchContext} from "../../utils/userContext";
import { LOAD_MONSTER } from '../../utils/actions';
import { UNLOAD_MONSTER } from '../../utils/actions';
import { QUERY_MONSTERS } from '../../utils/queries';

const MonsterList = ({ monsters, title }) => {
  const state = useUserStateContext();
  const dispatch = useUserDispatchContext();

  const { battlePageOpen } = state;

  const { loading, data } = useQuery(QUERY_MONSTERS);

  if (!monsters.length) {
    return <h3>No Monsters Yet</h3>;
  }


  return (
    <div className="monsters">
      <h3>{title}</h3>
      {monsters &&
        monsters.map((monster) => (
          <div key={monster._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {monster.name}
                </h4>
                <button
                    onClick={() => goToBattle(monster)}>Fight {monster.name}</button>
          </div>
        ))}
    </div>
  );
};

export default MonsterList;
