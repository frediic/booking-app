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

export default function Welcome() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "") {
      alert("Password should not be empty");
      return;
    }
    if (password === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setLoggedIn(true);
  };
  return (
    <div>
      {!loggedIn ? (
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
                  <Button variant="contained" fullWidth onClick={handleLogin}>
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions />
        </Card>
      ) : (
        <div>
          {isAdmin ? (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button color="inherit" href="/home">
                      Manage
                    </Button>
                    <Button color="inherit" href="/services">
                      Upload
                    </Button>
                  </Box>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Toolbar>
              </AppBar>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button color="inherit" href="/home">
                      Home
                    </Button>
                    <Button color="inherit" href="/services">
                      Services
                    </Button>
                    <Button color="inherit" href="/about">
                      About
                    </Button>
                    <Button color="inherit" href="/contact">
                      Contact
                    </Button>
                  </Box>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Toolbar>
              </AppBar>
            </Box>
          )}
        </div>
      )}
    </div>
  );
}
