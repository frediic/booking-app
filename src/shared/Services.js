import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function Services() {
  return (
    <div className="container" style={{ display: "flex", gap: "20px" }}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 200 }}
          image="/static/images/cards/basic.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Basic
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            className="mb-3"
          >
            Best for personal tem
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            £240
          </Typography>
          <hr />
          <Typography gutterBottom variant="h7" component="div">
            Features
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            No fee ATM withdrawal
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            Personalised cards
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            Exclusive metal card
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            Discounted transfers
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">
            Upgrade
          </Button>
          <Button variant="outlined" size="small">
            Contact Sale
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, backgroundColor: "pink" }}>
        <CardMedia
          sx={{ height: 200 }}
          image="/static/images/cards/standard.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Standard
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            className="mb-3"
          >
            Best for personal tem
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            £390
          </Typography>
          <hr />
          <Typography gutterBottom variant="h7" component="div">
            Features
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            No fee ATM withdrawal
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            Personalised cards
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            Exclusive metal card
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            Discounted transfers
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">
            Upgrade
          </Button>
          <Button variant="outlined" size="small">
            Contact Sale
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, backgroundColor: "green" }}>
        <CardMedia
          sx={{ height: 200 }}
          image="/static/images/cards/premium.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Premium
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            className="mb-3"
          >
            Best for personal tem
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            £240
          </Typography>
          <hr />
          <Typography gutterBottom variant="h7" component="div">
            Features
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            No fee ATM withdrawal
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            Personalised cards
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            Exclusive metal card
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <TaskAltIcon />
            Discounted transfers
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">
            Upgrade
          </Button>
          <Button variant="outlined" size="small">
            Contact Sale
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Services;
