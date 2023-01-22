import React from 'react';

import goToBattle from '../../components/goToBattle'

const MonsterList = ({ monsters, title }) => {
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
