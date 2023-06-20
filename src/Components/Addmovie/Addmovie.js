import React from 'react'
import Navbar from '../Navbar/Navbar'
import * as yup from "yup";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useFormik } from 'formik';
import { Box, Button, Container,  Grid, TextField, Typography } from '@mui/material';
import "./Addmovie.css"

const formValidationSchema = yup.object({
    Title : yup.string().required("Title is required"),
    Poster: yup.string().required("Poster url is required").url(),
    About: yup.string().required("About is Required"),
    Trailer: yup.string().required("Trailer url is required").url(),
    Released: yup.number().required("Released is Required")
})


export const Addmovie = () => {
const history = useHistory();

const{handleSubmit,handleChange,handleBlur,values,touched,errors} = 

useFormik({
    initialValues :{
        Title:"",
        Poster:"",
        About:"",
        Trailer:"",
        Released:"",
    },
    ValidationSchema : formValidationSchema,
    onSubmit:async(values)=>{
    const data = await fetch(`https://moviepasswordrest.onrender.com/addmovie`,{
        method:"POST",
        headers :{"content-type":"application/json"},
        body:JSON.stringify(values),
    })
    const result = await data.json();
    console.log(result);
    if(data.status===400){
        alert(JSON.stringify(result));
    }
    else{
        alert(JSON.stringify(result));
        history.push("/Home")
    }
    } 
})


  return (
    <div className='addmov'>
        <Navbar/>
        <Container component="main"  className='cont'  >
        <Box className="main-box" sx={{width:"60rem","@media (max-width: 480px)": {width:"auto"}}}  >
          <Typography   component="h1" variant="h5"> Add Movie Data  </Typography>
           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 6 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Title"
                  label="Title"
                  name="Title"
                  autoComplete="Title"
                  value={values.Title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Title && errors.Title}
                  helperText={touched.Title && errors.Title ? errors.Title : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Poster"
                  label="Poster"
                  id="Poster"
                  autoComplete="Poster"
                  value={values.Poster}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Poster && errors.Poster}
                  helperText={touched.Poster && errors.Poster ? errors.Poster : null}
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="About"
                  label="About"
                  id="About"
                  autoComplete="About"
                  value={values.About}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.About && errors.About}
                  helperText={touched.About && errors.About ? errors.About : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Trailer"
                  label="Trailer"
                  id="Trailer"
                  autoComplete="Trailer"
                  value={values.Trailer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Trailer && errors.Trailer}
                  helperText={touched.Trailer && errors.Trailer ? errors.Trailer : null}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Released"
                  label="Released"
                  id="Released"
                  autoComplete="Released"
                  value={values.Released}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Released && errors.Released}
                  helperText={touched.Released && errors.Released ? errors.Released : null}
                />
              </Grid>

            </Grid>
            <br/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Submit
            </Button>
           
          </Box>
        </Box>

      </Container>
    </div>
  )
}


