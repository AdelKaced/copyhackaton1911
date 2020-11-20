import React, { useState } from "react";
import "./search.css";

const Search = ({ info }) => {
  const [select, setSelect] = React.useState(false);

  const onSelect = () => {
    setSelect(!select);
  };

  console.log(select)
  console.log(info);
  return (
    <div className="search-display">
      <div className="search-img">
        <div className={select ? "search-displayOn" : "search-displayOff"}>
          <img src={info.picture} alt={info.name} />
          <p> {info.name} </p>
          <button onClick={onSelect}> Troc </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
