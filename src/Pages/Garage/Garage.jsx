import React from "react";
import "./Garage.css";
import Left from "./Left";
import Right from "./Right";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
const Garage = () => {
  return (
    <>
      <Navbar />
      <div className="garage">
        <Link to={"/go/4"} className="w-60">
          <Left />
        </Link>
        <div className="w-40">
          <Right />
        </div>
      </div>
    </>
  );
};

export default Garage;
