import * as React from "react";
import {
  AppBar,
  Button,
  InputBase,
  // MenuIcon,
  styled,
  // StyledIconButton,
  // TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
// import { useState } from 'react';
import logo from "../img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MenuIcon from "@mui/icons-material/Menu";
// import { ClassNames } from '@emotion/react';

// const pages = ['Card', 'Carousel', 'Table'];

const StyledButton = styled(Button)({
  backgroundColor: "#1e4261",
});

// const StyledIconButton = styled(IconButton)({
//     backgroundColor: '#1e4261'
// })

function Navbar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    backgroundColor: "white",
    color: "#A6A6A6",
    borderRadius: theme.shape.borderRadius,
  }));

  //   const SearchIconWrapper = styled('div')(({ theme }) => ({
  //     padding: theme.spacing(0, 2),
  //     height: '100%',
  //     position: 'absolute',
  //     pointerEvents: 'none',
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {},
    },
  }));

  return (
    <div className="navbar">
      {/* <div className="navbar-container"> */}
      <Box sx={{ flexGrow: 1, marginBottom: 0 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#214f74", height: "136px" }}
        >
          <Toolbar className="navbar-row1">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
              className="navbar-row1-left"
            >
              <Typography
                noWrap
                component="div"
                sx={{ mr: 2, display: "none", md: "flex" }}
              >
                <img
                  component="img"
                  height="29px"
                  width="152px"
                  src={logo}
                  alt="logo"
                />
              </Typography>

              {/* <div className={classes.searchContainer}>
                                    <TextField className={classes.searchInput} />
                                </div> */}

              <Search
                style={{
                  width: "923px",
                  height: "37px",
                  backgroundColor: "white",
                  float: "left",
                }}
              >
                <StyledInputBase
                  style={{ width: "923px" }}
                  placeholder="Search by keywords or part #"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              className="navbar-row1-right"
            >
              <StyledButton
                variant="contained"
                size="medium"
                style={{ backgroundColor: "#E2873C" }}
              >
                <SearchIcon />
              </StyledButton>
              <StyledButton
                variant="contained"
                size="medium"
                startIcon={<PersonIcon />}
              >
                Sign In or Create Account
              </StyledButton>
              <StyledButton
                variant="contained"
                size="medium"
                startIcon={<FavoriteIcon />}
              >
                Wish List
              </StyledButton>
              <StyledButton variant="contained" size="medium">
                <ShoppingCartIcon />
              </StyledButton>
            </div>
          </Toolbar>
          <Toolbar>
            <div
              className="navbar-row2"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div
                className="navbar-row2-left"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                <MenuIcon />
                Departments
              </div>
              <div>
                Brands Services Promotions Clearance New Arrivals Tax Free
                Shipping BYOD Returns & Warranty Careers Help and support
              </div>
              <div>
                <StorefrontIcon />
                Stores
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
