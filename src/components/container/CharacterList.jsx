import React from "react";
import { CharacterCard } from "components";

const CharacterList = (props) => {
  const { data } = props;

  return (
    <div className="character-list">
      {data.map((char, i) => (
        <CharacterCard data={char} key={i} />
      ))}
    </div>
  );
};

CharacterList.defaultProps = {
  data: [],
};

export default CharacterList;
