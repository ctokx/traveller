import React from "react";

const Car = ({ position }) => {
  return (
    <div
      className="car"
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: "50px",
        height: "50px",
        backgroundColor: "red",
      }}
    />
  );
};

export default Car;
