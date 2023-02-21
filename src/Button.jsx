import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Button = ({ position, onClick, text, onReady }) => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    onReady();
  }, [onReady]);

  const handleClick = () => {
    onClick();
    // Navigate to the contact page using React Router
    navigate("/contact");
  };

  return (
    <button
      ref={buttonRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        height: "100px",
        width: "100px",
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
};

export default Button;
