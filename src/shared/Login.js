import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import "../App.css";
import { StoreContext } from './StoreProvider';


export default function Credential() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setValidity] = useState(true);
    const { _, dispatch } = useContext(StoreContext)

    const navigate = useNavigate(); // Correct hook for navigation
    const onEmailSet = (e) => {
        setEmail(e.target.value);
        onValiditySet(e.target.value, password); // Pass updated email and password
    };

    const onPasswordSet = (e) => {
        setPassword(e.target.value);
        onValiditySet(email, e.target.value); // Pass updated email and password
    };

    const onValiditySet = (email, password) => {
        if (email.length > 1 && password.length > 1) {
            setValidity(false);
        } else {
            setValidity(true);
        }
    };

    const navigateToHandler = () => {
        dispatch({ type: "CREDENTIAL", payload: { email, password } });

        navigate('/home?username=john'); // Use navigate to programmatically navigate
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
                            <Typography variant="h6" component="div">Email</Typography>
                        </div>
                        <div className="col-sm-5">
                            <TextField
                                fullWidth
                                id="filled-basic"
                                label="Email"
                                variant="filled"
                                onChange={(e) => onEmailSet(e)}
                            />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-1">
                            <Typography variant="h6" component="div">Password</Typography>
                        </div>
                        <div className="col-sm-5">
                            <TextField
                                type="password"
                                fullWidth
                                id="outlined-basic"
                                label="Password"
                                variant="filled"
                                onChange={(e) => onPasswordSet(e)}
                            />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
                            <Button
                                disabled={isDisabled}
                                variant="contained"
                                fullWidth
                                onClick={navigateToHandler}
                            >
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
