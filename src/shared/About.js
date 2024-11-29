import React,{useContext, useState} from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { StoreContext } from './StoreProvider';
export default function About() {
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const {state,dispatch} = useContext(StoreContext)

    
 const handleClick = ()=>{
    alert(`Full name ${fullName} and the email ${email} and the message ${message}`);
 }

    return (
        <div className='container-sm mt-4'>
            <Card sx={{ minWidth: 275 }} className="mt-5 mb-1">
                <CardHeader
                    title="About Booking App"
                    subheader="Fill Form to contact us"
                ></CardHeader>
                <CardContent>
                    <div className='row'>
                        <div className='col-md-2'>
                            <Typography variant="h6" component="div">Full name</Typography>
                        </div>
                        <div className='col-md-6'>
                            <TextField   variant='filled' fullWidth onChange={(e)=>setFullName(e.target.value)} ></TextField>
                            {/* <input type="text" onchange='handleSetEmail($event)' /> */}
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-2'>
                            <Typography variant="h6" component="div">Your email</Typography>
                        </div>
                        <div className='col-md-6'>
                            <TextField value={state.credential.email} variant='filled' fullWidth onChange={(e)=>setEmail(e.target.value)}></TextField>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-2'>
                            <Typography variant="h6" component="div">Your message</Typography>
                        </div>
                        <div className='col-md-6'>
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                variant='filled'
                                value={`${state.credential.email} ${state.credential.password}`}
                                fullWidth={true}
                                onChange={(e)=>setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-2'>

                        </div>
                        <div className='col-md-6'>
                            <Button variant="contained" endIcon={<SendIcon />}
                             onClick={handleClick}
                            >
                                Send
                            </Button>
                        </div>
                    </div>

                </CardContent>
                <CardActions></CardActions>
            </Card>

        </div>
    )
}