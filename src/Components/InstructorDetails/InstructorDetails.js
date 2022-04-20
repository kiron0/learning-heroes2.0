import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./InstructorDetails.css";

const InstructorDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://lucky-one.herokuapp.com/hero/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <>
      <div className="details-btn">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="details-inst">
        <img src={user.image} alt="" />
        <h3>{user.instructor}</h3>
        <h3>{user.course_name}</h3>
      </div>
    </>
  );
};

export default InstructorDetails;
