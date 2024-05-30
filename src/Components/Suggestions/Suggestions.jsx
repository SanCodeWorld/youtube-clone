import React from "react";
import "./Suggestions.css";
import { Link } from "react-router-dom";
import Garage from "../../Pages/Garage/Garage";

const Suggestions = () => {
  return (
    <div className="suggestions-bar">
      <ul className="suggestions-ul">
        <li>all</li>
        <li>React-router</li>
        <li>APIs</li>
        <li>UI</li>
        <li>Live</li>
        <li>News</li>
        <li>Tamil Cinema</li>
        <li>Music</li>
        <li>Mixes</li>
        <li>Gaming</li>
        <li>Football</li>
      </ul>
    </div>
  );
};

export default Suggestions;
