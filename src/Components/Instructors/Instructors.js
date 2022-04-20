import React, { useEffect, useState } from "react";
import ShowInstructors from "../ShowInstructors/ShowInstructors";
import "./Instructors.css";
import "../Footer/Footer.css";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(
      "https://lucky-one.herokuapp.com/heroes"
    )
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="instructors">
      {instructors.map((instructor) => (
        <ShowInstructors
          ShowInstructors={instructor}
          key={instructor.id}
        ></ShowInstructors>
      ))}
    </div>
  );
};

export default Instructors;
