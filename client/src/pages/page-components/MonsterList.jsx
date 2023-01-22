import React from 'react';

const MonsterList = ({ monsters, title }) => {
  if (!monsters.length) {
    return <h3>No Monsters Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {monsters &&
        monsters.map((monster) => (
          <div key={monster._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {monster.name}
            </h4>
          </div>
        ))}
    </div>
  );
};

export default MonsterList;
