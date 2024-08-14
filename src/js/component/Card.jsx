import React from "react";
import icon from "../../img/Group_69.png";
import icon1 from "../../img/Vector.png";
import icon2 from "../../img/icon_job.png";
import icon3 from "../../img/Group.png";

export const Card = ({ title, paragraph, salary, jobs, career }) => {
  return (
    <div className="card-container">
      <div className="icon-container">
        <img className="main-icon" src={icon} alt="icon" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-paragraph">{paragraph}</p>
      <div className="card-info">
        <p>
          <img className="icon" src={icon1} alt="icon" /> Average Salary per
          year: <b>{salary}</b>
        </p>
        <p>
          <img className="icon" src={icon2} alt="icon" /> Average Salary per Job
          Positions: +<b>{jobs}</b>
        </p>
        <p>
          <img className="icon" src={icon3} alt="icon" /> Average Salary per
          Career Growth: <b>{career}</b>
        </p>
      </div>
      <button className="card-button">See plans & prices</button>
    </div>
  );
};
