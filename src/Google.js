import React from "react";
import './google.css';

const Google = () => {
  return (
    <div className="master">
        <div className="container">
          <img width="272px" src={require("./google.png")} />
          <div className="search-bar">
              <input></input>
          </div>
          <div className="button-container">
            <button>Google-søk</button>
            <button>Jeg prøver lykken</button>
          </div>
        </div>
    </div>
  );
};

export default Google;
