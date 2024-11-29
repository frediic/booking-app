import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import "../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleclickBtn = () => {
    if (password === "admin") {
      window.location.href = "/home";
    } else if (password.trim() === "") {
      alert("Password should not be empty");
    } else {
      window.location.href = "/services";
    }
  };

  return (
    <Card sx={{ minWidth: 275 }} className="container mt-2">
      <CardHeader
        title="Provide your login credentials"
        subheader="All fields are required"
      />
      <CardContent>
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-4"></div>
            <div className="col-sm-1">
              <Typography variant="h6" component="div">
                Email
              </Typography>
            </div>
            <div className="col-sm-5">
              <TextField
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-4"></div>
            <div className="col-sm-1">
              <Typography variant="h6" component="div">
                Password
              </Typography>
            </div>
            <div className="col-sm-5">
              <TextField
                type="password"
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-4"></div>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <Button variant="contained" fullWidth onClick={handleclickBtn}>
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardActions />
    </Card>
  );
}
