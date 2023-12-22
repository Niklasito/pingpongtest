import React from "react";
import { Link } from "react-router-dom";
import "../scss/style-components/_Backbutton.scss";
const Backbutton = ({path}) => {
  return (
    <div className="backbtn-holder">
      <Link to={path}>
        <button>
          <i className="fa fa-chevron-left back-button"></i>
        </button>
      </Link>
    </div>
  );
};

export default Backbutton;
