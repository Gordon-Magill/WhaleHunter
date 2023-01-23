import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import Monster from '../../components/Monster';
// Importing content for userReducer
import { useUserStateContext, useUserDispatchContext} from "../../utils/userContext";
import { LOAD_MONSTER } from '../../utils/actions';
import { UNLOAD_MONSTER } from '../../utils/actions';
import { QUERY_MONSTERS } from '../../utils/queries';

function MonsterList() {
  const state = useUserStateContext();
  const dispatch = useUserDispatchContext();

  const { battlePageOpen } = state;

  const { loading, data } = useQuery(QUERY_MONSTERS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: LOAD_MONSTER,
        payload: data.monsterInfo,
      });
    }
  }, [data, dispatch]);

  return (
    <div className="my-2">
      <h2>The Monsters</h2>
      {state.monsterInfo.length ? (
        <div className="flex-row">
            <Monster
              key={monsterInfo._id}
              _id={monsterInfo._id}
              name={monsterInfo.name}
            />
        </div>
      ) : (
        <h3>No monsters to fight!</h3>
      )}
    </div>
  );
}

export default MonsterList;
