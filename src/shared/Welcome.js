import React from "react";
import { useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  //const email = "fred@example.com";

  return (
    <div>
      <h2>Welcome your email is {email}</h2>
    </div>
  );
}

export default Welcome;
