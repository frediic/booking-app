import React from "react";

function Welcome(props) {
  return (
    <div>
      <h2>
        Welcome your username is {props.name}, and your password is{" "}
        {props.password}
      </h2>
    </div>
  );
}

export default Welcome;
