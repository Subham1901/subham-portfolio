import { Box } from "@chakra-ui/react";
import React from "react";
import "./progress.css";
import { useEffect } from "react";
import { useState } from "react";

const Progressbar = ({ name, percent = 0 }) => {
  const [skillPercernt, setSkillPercernt] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (skillPercernt === percent) {
        clearInterval(interval);
      } else {
        setSkillPercernt((prev) => prev + 1);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [skillPercernt]);
  return (
    <Box className="progress-container">
      <Box
        className="progressbar"
        style={{
          background: `conic-gradient(rgb(3, 250, 205) ${
            skillPercernt * 3.6
          }deg, rgb(255, 255, 255) 0deg)`,
        }}
      >
        <Box className="progress">{skillPercernt}%</Box>
      </Box>
      <p className="name">{name}</p>
    </Box>
  );
};

export default Progressbar;
