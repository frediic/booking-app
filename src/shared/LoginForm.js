import React from "react";
import Button from "@mui/material/Button";
function LoginForm(prop) {
    // javascript goes here
    const sayHello = () => {
        // display a popup message and log it to the console using alert and console.log methods respectively.
        alert("Hello World!");
        console.log("Hello World!");
    }
    const sayHi = () => {
        // display a popup message and log it to the console using alert and console.log methods respectively.
        alert("HI World!");
        console.log("HI World!");
    }

    const greeting = (name) => {
        // display a popup message and log it to the console using alert and console.log methods respectively.
        alert(`Hi ${name} nice to meet you`);
        console.log("HI World!");
    }


    return (
        <div>
            

            {/* <h2>Welcome {prop.name}! to react  </h2> <br />
            <button onClick={sayHello}>Click me </button><br />
            <button onClick={sayHello}>Click me </button><br />
            <button onClick={sayHi}>Click me </button><br />
            <Button variant="text" onClick={sayHi} >Text</Button><br />

            <Button variant="contained" onClick={() => greeting('Jon')} >Greet</Button><br /> */}

        </div>
    )

}


export default LoginForm;