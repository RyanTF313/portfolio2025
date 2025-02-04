import React, { useState } from "react";
import { milestones } from "../constants/milestones";

function About() {
  const [activeTab, setActiveTab] = useState("youth");

  const timelineStyle: React.CSSProperties = {
    flexDirection: "row",
  };

  const milestonesStyle: React.CSSProperties = {
    display: "flex",
    flex: "0 0 80%",
    flexDirection: "column",
    padding: ".5rem",
  };

  const sideMenuStyle: React.CSSProperties = {
    display: "flex",
    flex: "0 0 20%",
    flexDirection: "column",
    gap: "1rem",
    padding: ".5rem",
  };

  return (
    <div className="About">
      <div className="timeline" style={timelineStyle}>
        <ul className="milestones" style={milestonesStyle}>
          {milestones.length &&
            milestones.map((milestone, i) => {
              if (i % 2 === 0)
                return (
                  <li
                    className={milestone.name}
                    key={milestone.name}
                    style={{ display: activeTab === milestone.name ? "flex" : "none" }}
                  >
                    <p>{milestone.description}</p>
                    {milestone.photo && <img src={milestone.photo as string} />}
                  </li>
                );
              return (
                <li
                  className={milestone.name}
                  key={milestone.name}
                  style={{ display: activeTab === milestone.name ? "flex" : "none" }}
                >
                  {milestone.photo && <img src={milestone.photo as string} />}
                  <p>{milestone.description}</p>
                </li>
              );
            })}
        </ul>
        <ul className="side-menu" style={sideMenuStyle}>
          {milestones.map((milestone, i) => (
            <li key={i} style={{color: activeTab === milestone.name ? '#01baef' : 'inherit'}} onClick={() => setActiveTab(milestone.name)}>
              {milestone.tabName.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
