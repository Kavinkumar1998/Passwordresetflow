import React from 'react';
import  { useEffect, useState } from "react";
import "./Home.css";
import {  Typography } from '@mui/material';
import { useHistory } from 'react-router-dom'



export const Movie = () => {

    const history= useHistory();
const [movie,setmovie]= useState([]);
useEffect(() =>{
const getmovie = async() =>{
    try{
      const response = await fetch(`https://moviepasswordrest.onrender.com/getmovies`,{
        method:"GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
         "Content-Type":"application/json"
        },
       });
      const data= await response.json();
      setmovie(data);
    }
    catch(error){
 console.log(error);
    }
  };
  getmovie();
},[])
console.log(movie)
  return (

<div classNameName="card-container"> 
<div className="main-content">
<Typography sx={{ mt: 3, mb: 2,fontFamily:"cursive",fontWeight:"Bold",fontSize:"3rem"}} component="h1" variant="h5"> Movies </Typography>
</div>         <div className="row" >
{movie.map((movie)=>(
                   <div className="container" key ={movie._id}onClick={()=>{history.push(`/About/${movie._id}`)}}>
                   <div className="contentArea">
                   <section className="title">{movie.Title}</section>
                   <img src={movie.Poster} className="image" alt="Poster"/>
                   </div>
                   </div> 
              ))}
</div>
        </div>
 
  )
}

