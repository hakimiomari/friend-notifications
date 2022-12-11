import React, { useState } from "react";
import info from "./info";
import "./style.css";

const Birth_Day_Remainder = () => {
  const [people, setPeople] = useState(info);
  const clearall = (e) => {
    e.preventDefault();
    setPeople([]);
  };
  const remove = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    return setPeople(newPeople);
  };
  return (
    <div className="birthday_info">
      <h1 className="header"> {people.length} Notifications</h1>
      {people.map((person) => {
        return (
          <>
            <div className="row">
              <div className="profile" key={person.id}>
                <div className="profile_img">
                  <img className="img" src={person.img} alt="photo" />
                </div>
                <div className="profile_info">
                  <h3>{person.name}</h3>
                  <span className="notification_time">{person.bd}</span>
                </div>
              </div>
              <div>
                <button className="close" onClick={() => remove(person.id)}>
                  X
                </button>
              </div>
            </div>
          </>
        );
      })}
      <button onClick={clearall} className="clear_btn">
        Clear All
      </button>
    </div>
  );
};

export default Birth_Day_Remainder;
