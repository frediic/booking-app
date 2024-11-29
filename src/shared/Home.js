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
import { useLocation } from "react-router-dom";

// const bull = (
//     <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}  > </Box>
// );
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export function Home(counter) {
    const [data, setData] = useState(rows);
    const [searchText, setSearch] = useState(rows);
    const searchItems = () => {
        if (searchText == '') {
            setData(rows);
            return;
        }
        const result = rows.filter(x => x.name.toString().toLowerCase().includes(searchText.toLowerCase()));
        setData(result);
    };
    const { search } = useLocation(); // Access query parameters
    const query = new URLSearchParams(search);
    const username = query.get("username"); // Get the 'username' parameter

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
                            id="filled-basic"
                            label="Enter text to search"
                            variant="filled"

                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </CardContent>
                    <CardActions>
                        <Button onClick={searchItems} size="small">
                            Search
                        </Button>
                    </CardActions>
                </Card>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
