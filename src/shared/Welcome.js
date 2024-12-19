import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Welcome({ setIsAdmin }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(false);
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   if (password === "admin") {
  //     setRole("admin");
  //     navigate("/home");
  //   } else {
  //     setRole("customer");
  //     navigate("/home");
  //   }
  // };
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "") {
      alert("Password should not be empty");
      return;
    }
    let user = {};
    if (password === "admin") {
      setIsAdmin(true);
      user = { email: email, password: password, isAdmin: "isAdmin" };
    } else {
      setIsAdmin(false);
      user = { email: email, password: password, isAdmin: "janitor" };
    }
    localStorage.clear();
    localStorage.setItem("clientCookie", JSON.stringify(user));
    navigate("/home");
  };
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        sx={{ minWidth: 275 }}
        className="w-100"
        style={{ maxWidth: "500px" }}
      >
        <CardHeader
          title="Provide your login credentials"
          subheader="All fields are required"
        />
        <CardContent>
          <form>
            <div className="mb-3">
              <Typography variant="h6" component="div">
                Email
              </Typography>
              <TextField
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Typography variant="h6" component="div">
                Password
              </Typography>
              <TextField
                type="password"
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Button variant="contained" fullWidth onClick={handleLogin}>
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
        <CardActions />
      </Card>
    </div>
  );
}
