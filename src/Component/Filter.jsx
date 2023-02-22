import React, { Component, useState } from "react";
import JsonData from "../Files/JsonData.json";

const Filter = () => {
  const [searchterm, setSearchterm] = useState("");

  return (
    <>
      <div className="mainDesign">
        <div className="searchBarContainer">
          <input
            type="text"
            className="searchBoxDesign"
            placeholder="Search...."
            onChange={(event) => setSearchterm(event.target.value)}
          />
        </div>
        <div className="listContainer">
          {JsonData.filter((eachRawItem) => {
            if (searchterm == "" ) {
              return eachRawItem
            } else if (eachRawItem.first_name.toLowerCase().includes(searchterm.toLowerCase())) {
              return eachRawItem
            }
          }).map((eachItem, key) => {
            return (
              <div className="" key={key}>
                <p>{eachItem.first_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;
