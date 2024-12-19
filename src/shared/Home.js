import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs"; // Import dayjs to handle date properly

const rows = [
  {
    bookingId: 1,
    customerName: "John Doe",
    date: "2024-12-14",
    status: "Confirmed",
    amount: 200.0,
  },
  {
    bookingId: 2,
    customerName: "Jane Smith",
    date: "2024-12-15",
    status: "Pending",
    amount: 150.0,
  },
  {
    bookingId: 3,
    customerName: "Alice Johnson",
    date: "2024-12-16",
    status: "Cancelled",
    amount: 0.0,
  },
  {
    bookingId: 4,
    customerName: "Bob Brown",
    date: "2024-12-17",
    status: "Confirmed",
    amount: 300.0,
  },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export function Home() {
  const [data, setData] = useState(rows);
  const [searchText, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [modelData, setModelData] = useState({
    bookingId: data.length + 1,
    customerName: "",
    date: dayjs(),
    status: "",
    amount: "",
  });

  const search = () => {
    if (!searchText) {
      setData(rows);
      return;
    }
    const result = rows.filter((x) =>
      x.customerName.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(result);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveChanges = () => {
    // Create a new booking entry
    const newBooking = {
      ...modelData,
      bookingId: data.length + 1, // Generate new bookingId based on current data length
      date: modelData.date.format("YYYY-MM-DD"), // Format the date before adding
    };

    // Add new booking entry to the data state
    setData((prevData) => [...prevData, newBooking]);

    // Close the dialog
    setOpen(false);
  };

  const handleDelete = (bookingId) => {
    const updatedData = data.filter((x) => x.bookingId !== bookingId);
    setData(updatedData);
  };

  return (
    <div className="container-fluid">
      <div className="container mt-3">
        <Card sx={{ minWidth: 275 }} className="mt-2 mb-1">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Search Component
            </Typography>
            <TextField
              fullWidth
              label="Enter text to search"
              variant="filled"
              onChange={(e) => setSearch(e.target.value)}
            />
          </CardContent>
          <CardActions>
            <Button onClick={search} size="small">
              Search
            </Button>
            <Button onClick={handleClickOpen}>Add New Booking</Button>
            <BootstrapDialog onClose={handleClose} open={open}>
              <DialogTitle sx={{ m: 0, p: 2 }}>Add New Booking</DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: theme.palette.grey[500],
                })}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent dividers>
                <TextField
                  fullWidth
                  label="Enter full name"
                  variant="filled"
                  onChange={(e) =>
                    setModelData({ ...modelData, customerName: e.target.value })
                  }
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Booking Date"
                    value={modelData.date}
                    onChange={(newValue) =>
                      setModelData({
                        ...modelData,
                        date: newValue || dayjs(), // Ensure the date is always a valid dayjs object
                      })
                    }
                  />
                </LocalizationProvider>
                <FormControl fullWidth>
                  <InputLabel id="status-select-label">Status</InputLabel>
                  <Select
                    value={modelData.status}
                    label="Status"
                    onChange={(e) =>
                      setModelData({ ...modelData, status: e.target.value })
                    }
                  >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="confirmed">Confirmed</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="Amount"
                  variant="filled"
                  onChange={(e) =>
                    setModelData({ ...modelData, amount: e.target.value })
                  }
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleSaveChanges}>Save changes</Button>
              </DialogActions>
            </BootstrapDialog>
          </CardActions>
        </Card>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Booking ID</TableCell>
                <TableCell align="right">Customer Name</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={i}>
                  <TableCell align="right">{row.bookingId}</TableCell>
                  <TableCell align="right">{row.customerName}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => handleDelete(row.bookingId)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
