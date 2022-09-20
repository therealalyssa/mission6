import React, { useEffect, useState } from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import ListingPage from "./Pages/ListingPage.js"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-i/core/Paper';
import { Container } from '@mui/system';
import ProductCard from './ProductCard';

export default function App() {

// useEffect(() => {
//   fetch('http://localhost:8000/notes')//add url for where data is saved
//   .then(res => res.json())
//   .then(data => setNotes(data))
// }, [])
 
  return (
    <Container>
      <Grid container>
          {products.map(product => (
              <Grid item key={product.id} xs={12} md={6} lg={4}
                <Paper>{ product.title }</Paper>
              </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}