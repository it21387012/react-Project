import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/dash.css";

export default function Dashboard() {
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonHover = () => {
    setButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setButtonHovered(false);
  };

  return (
    <div>
      <section id="content">
        <main>
          <div className="menu">
            <div className="left">
              <h1>WORK MANAGEMENT</h1>
            </div>
          </div>

          <div className="table-data">
            <div
              className={`tbutton ${buttonHovered ? "hovered" : ""}`}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              <Link to={"/EmployeeManageItems"}>
                <div className="head">
                  <h3>MANAGE WORK</h3>
                  <i className="bx bxs-customize"></i>
                </div>
              </Link>
            </div>

            <div className="tbutton">
              <Link to={"/AddEmployee"}>
                <div className="head">
                  <h3>ASSIGN WORK</h3>
                  <i className="bx bxs-alarm-add"></i>
                </div>
              </Link>
            </div>

            <div className="tbutton">
              <Link to={"/Employeereport"}>
                <div className="head">
                  <h3>VIEW WORK REPORT</h3>
                  <i className="bx bxs-report"></i>
                </div>
              </Link>
            </div>

            <div className="tbutton">
              <Link to={"/EmployeeManageItems"}>
                <div className="head">
                  <h3>MANAGE WORK</h3>
                  <i className="bx bxs-cart-alt"></i>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
