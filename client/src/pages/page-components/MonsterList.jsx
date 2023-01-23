import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

// Importing content for userReducer
import { useUserStateContext, useUserDispatchContext} from "../../utils/userContext";
import { LOAD_MONSTER } from '../../utils/actions';
import { UNLOAD_MONSTER } from '../../utils/actions';
import { QUERY_MONSTERS } from '../../utils/queries';

// Single monster object - not yet being used
import Monster from '../../components/Monster';

function MonsterList() {
  const state = useUserStateContext();
  const dispatch = useUserDispatchContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_MONSTERS);

  return (
    <div className="my-2">

      //DATA FROM QUERY_MONSTERS

    </div>
  );
}

export default MonsterList;
