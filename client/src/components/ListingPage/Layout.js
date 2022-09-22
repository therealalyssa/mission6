import React from "react";
import "./Layout.css";
import ProductCard from "./ProductCard";
import { Button, ButtonGroup, Grid } from "@mui/material";
import ListingBanner from "./ListingBanner.js";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import QuizResultsCard from "./QuizResultsCard";
import Filter from "./Filter.js";

const buttons = [
  <Button variant="contained" key="1">
    1
  </Button>,
  <Button key="2">2</Button>,
  <Button key="3">3</Button>,
  <Button key="Next">Next</Button>,
];

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

const resultsFilter = [
  { title: "Most Popular" },
  { title: "Highest Rated" },
  { title: "Latest Listings" },
  { title: "Price Low to High" },
  { title: "Price High to Low" },
];

export default function Layout() {
  // const classes = useStyles()

  return (
    <Box Boxspacing={2}>
      <div className="page-nav">
        <p>Home > Computers & Tablets > Laptops > Business Laptops</p>
      </div>

      <Box
        className="listing-sidebar"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1322px",
          height: "0px",
          border: "1px solid #000000 25%",
        }}
      >
        <QuizResultsCard />
        <Filter />
      </Box>

      <div className="listing-container-right">
        <hr
          style={{
            height: "0px",
            border: "1px solid #000000 25%",
            paddingLeft: "550px",
            paddingRight: "100px"
          }}
        ></hr>

        <div
          className="filter-summary"
          style={{
            paddingLeft: "516px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p>59 items</p>
          <p>Sort by</p>
          <Autocomplete
            id="results-filter"
            options={resultsFilter}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Custom filter" />
            )}
          />
        </div>

        <hr
          style={{
            height: "0px",
            border: "1px solid #000000 25%",
            paddingLeft: "550px",
            paddingRight: "100px"
          }}
        ></hr>

        <div
          className="filters"
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "505px",
            justifyContent: "flex-start",
          }}
        >
          <p>Filters</p>
          <Button
            style={{
              color: "#414750",
              background: "#FFFFFF",
              border: "1px solid #CFD4D9",
            }}
            variant="outlined"
          >
            Medium (256GB-512GB)
            <ClearIcon />
          </Button>
          <Button
            style={{
              color: "#414750",
              background: "#FFFFFF",
              border: "1px solid #CFD4D9",
            }}
            variant="outlined"
          >
            8 gigabytes
            <ClearIcon />
          </Button>
          <p>Clear all</p>
        </div>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          paddingTop="61px"
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

          {/* <Grid item lg={3}>
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
          </Grid> */}

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
            paddingTop: "76px",
            border: "#DFE2E6",
          }}
          size="small"
        >
          {buttons}
        </ButtonGroup>
      </div>
    </Box>
  );
}
