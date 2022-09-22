import React from 'react'
import './ProductGrid.css'
import ProductCard from './ProductCard'
import { 
    Grid, 
    // makeStyles 
    } from '@mui/material'

// const useStyles = makeStyles({
//     gridContainer: {
//         paddingLeft: '526px',
//         paddingRight: '49px'
//     }
// })

export default function ProductGrid() {
    
    // const classes = useStyles()
    
    return (
        <Grid 
            container spacing={4} 
            justifyContent="center"
            alignItems="center"
            paddingTop="254px"
            paddingLeft="526px"
            paddingRight="19px"
            // className={classes.gridContainer}
        >
            <Grid item lg={3}>
                <ProductCard />
            </Grid>
            <Grid item lg={3}>
                <ProductCard />
            </Grid>
            <Grid item lg={3}>
                <ProductCard />
            </Grid>
            <Grid item lg={3}>
                <ProductCard />
            </Grid>

            <Grid item lg={3}>
                <ProductCard />
            </Grid>
            <Grid item lg={3}>
                <ProductCard />
            </Grid>
            <Grid item lg={3}>
                <ProductCard />
            </Grid>
            <Grid item lg={3}>
                <ProductCard />
            </Grid>

            <Grid item lg={3}>
                <ProductCard />
            </Grid>
            <Grid item lg={3}>
                <ProductCard />
            </Grid>
            <Grid item lg={3}>
                <ProductCard />
            </Grid>
            <Grid item lg={3}>
                <ProductCard />
            </Grid>
               
        </Grid>      
    )
}