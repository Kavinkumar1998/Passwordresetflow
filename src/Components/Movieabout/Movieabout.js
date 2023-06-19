import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Movieabout.css"
import Navbar from '../Navbar/Navbar';

const Movieabout = () => {

    const {Id} = useParams();
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

const found = movie.filter(obj=>obj._id === Id);
  console.log(found);
  return (
    <div className='main'>
      <Navbar/>
        {found.map((movie)=>(
            
                   <div className="t-container" key ={movie._id}>
                    <div className="trailer"><iframe  width="100%" height="700px" src={movie.Trailer} title='youtube trailer' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                   <div className="t-contentArea">
                    <div ClassName="left">
                         <img src={movie.Poster} className="image" alt="Poster"/>
                         </div>
                  <div className="right">
                  <section className="t-title">Tittle : {movie.Title}</section>
                  <section className="t-About">About : {movie.About}</section>
                  <section className="t-released">Released : {movie.Released}</section>  
                  </div>
                  
                   </div>
                   </div> 
              ))}
       
    </div>
  )
}

export default Movieabout
