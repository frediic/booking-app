import React from "react";
import "./Greeting.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Greeting() {
  return (
    <div className="greeting">
      <h2>Hello Welcome to React!!</h2>
      <Button variant="contained">Hello world</Button>;
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

export default Greeting;
