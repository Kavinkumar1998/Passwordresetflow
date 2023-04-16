import React from 'react'
import { useHistory } from 'react-router-dom';
import "./Nopage.css";
import { Typography } from '@mui/material';
const Nopage = () => {
    const history = useHistory();

    return(
        <div className='Nopage'>
            <Typography> You are out of our Website
        please click the below button to redirect to home</Typography>
        <button className='button' onClick={()=>{history.push("/Home")}}>Home</button>
        </div>  
    )
}

export default Nopage