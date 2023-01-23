import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

// Importing content for userReducer
import { useUserStateContext, useUserDispatchContext} from "../../utils/userContext";
import { LOAD_MONSTER } from '../../utils/actions';
import { UNLOAD_MONSTER } from '../../utils/actions';
import { QUERY_MONSTERS } from '../../utils/queries';

// Single monster object - not yet being used
import MonsterObject from '../../components/Monster';

function MonsterList() {
  const state = useUserStateContext();
  const dispatch = useUserDispatchContext();

  const { data } = useQuery(QUERY_MONSTERS);

   // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const monsterData = data?.monsters || [];

  console.log("monsterData: " , monsterData);

  return (
    <div className="my-2">

      {monsterData.map((monster) => (
          <MonsterObject
            monsterID={monster.monsterID}
            name={monster.name}
            />
        ))}

    </div>
  );
}

export default MonsterList;
