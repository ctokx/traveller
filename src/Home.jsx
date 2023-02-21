import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Car from "./Car";
import Button from "./Button";
import "./Home.css";
const Home = () => {
  const [position, setPosition] = useState({ x: 3, y: 3 });
  const [buttonsReady, setButtonsReady] = useState(false);
  const navigate = useNavigate();
  const carRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const carElement = document.querySelector(".car");
      if (!carElement) {
        console.log("car not found");
        return;
      }
      switch (event.key) {
        case "ArrowUp":
          setPosition((prev) => ({ ...prev, y: prev.y - 40 }));
          break;
        case "ArrowDown":
          setPosition((prev) => ({ ...prev, y: prev.y + 50 }));
          break;
        case "ArrowLeft":
          setPosition((prev) => ({ ...prev, x: prev.x - 50 }));

          break;
        case "ArrowRight":
          setPosition((prev) => ({ ...prev, x: prev.x + 50 }));
          break;
        case " ":
          if (!buttonsReady) {
            return;
          }
          const buttons = document.querySelectorAll("button");
          buttons.forEach((button) => {
            const buttonRect = button.getBoundingClientRect();
            const carRect = carElement.getBoundingClientRect();
            if (
              carRect.left >= buttonRect.left &&
              carRect.right <= buttonRect.right
            ) {
              console.log("heyo");
              button.click();
            }
          });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [buttonsReady]);

  useEffect(() => {
    if (carRef.current) {
      setButtonsReady(true);
    }
  }, []);

  const handleButtonReady = () => {
    const buttons = document.querySelectorAll("button");
    if (buttons.length === 2) {
      setButtonsReady(true);
    }
  };

  return (
    <div className="home">
      <Button
        position={{ x: 100, y: 100 }}
        onClick={() => navigate("/contact")}
        text="Button 1"
        onReady={handleButtonReady}
      />
      <Button
        position={{ x: 300, y: 300 }}
        onClick={() => console.log("Button 2 clicked!")}
        text="Button 2"
        onReady={handleButtonReady}
      />
      <Car position={position} ref={carRef} />
    </div>
  );
};

export default Home;
