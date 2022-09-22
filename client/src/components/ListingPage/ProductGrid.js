import React from 'react'
import './ProductGrid.css'
import ProductCard from './ProductCard'
import { Button, ButtonGroup, Grid } from '@mui/material'
import ListingBanner from "./ListingBanner.js";
import { Box } from '@mui/system';
// import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';



const buttons = [
    <Button variant="contained" key="1">1</Button>,
    <Button key="2">2</Button>,
    <Button key="3">3</Button>,
    <Button key="Next">Next</Button>,
];
  
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

  const resultsFilter = [
    { title: 'Most Popular' },
    { title: 'Highest Rated' },
    { title: 'Latest Listings' },
    { title: 'Price Low to Hight' },
    { title: 'Price High to Low' },
  ]
  
  
export default function ProductGrid() {
    
    // const classes = useStyles()
    
    return (
        
        <Box Boxspacing={2} className='page-nav'>
            <div>
                <p>Home > Computers & Tablets > Laptops > Business Laptops</p>
                {/* <Link to="/">Home {'>'} </Link>
                <Link to="/">Computers & Tablets {'>'} </Link>
                <Link to="/">Laptops {'>'} </Link>
                <Link to="/">Buiness Laptops </Link> */}
            </div>

            <div style={{paddingLeft: '516px'}} className='section-break'>
                <hr
                    style={{
                        width: '1322px',
                        height: '0px',
                        border: '1px solid #000000 25%',
                    }}
                >
                </hr>

                <p>59 items</p>
                <p>Sort by</p>
                <Autocomplete
                    id="results-filter"
                    options={resultsFilter}
                    getOptionLabel={(option) => option.title}
                    filterOptions={filterOptions}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Custom filter" />}
                />

                <hr
                    style={{
                        width: '1322px',
                        height: '0px',
                        border: '1px solid #000000 25%',
                    }}
                >
                </hr>
                
                <p>Filters</p>
                <Button variant="outlined">Medium (256GB-512GB)<ClearIcon /></Button>
                <Button variant="outlined">8 gigabytes<ClearIcon /></Button>
                <p>Clear all</p>
                
            </div>
            
            <Grid 
                container spacing={4} 
                justifyContent="center"
                alignItems="center"
                paddingTop="254px"
                paddingLeft="526px"
                paddingRight="19px"
                paddinigBottom="766px"
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

                <ListingBanner />

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
            
            <ButtonGroup 
                style={{
                    width: "9px",
                    height: "18px", 
                    justifyContent: "center",
                    paddingLeft: "980px", 
                    paddingBottom: "50px",
                    Border: "#DFE2E6"           
                }} 
                size="small">
                {buttons}
            </ButtonGroup>
        </Box>      
    )
}