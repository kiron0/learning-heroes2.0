import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShowInstructors.css";

const ShowInstructors = ({ ShowInstructors }) => {
  const { id, image } = ShowInstructors;
  const navigate = useNavigate();
  const showDetails = () => {
    const path = `/instructor/${id}`;
    navigate(path);
  };
  return (
    <div className="show-inst">
      <img src={image} alt="" />
      <div className="details-btn">
        <button onClick={showDetails}>Learn More</button>
      </div>
    </div>
  );
};

export default ShowInstructors;
