import * as React from "react";
import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import logo from "../img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";


const StyledButton = styled(Button)({
  backgroundColor: "#1e4261",
  height: "37px",
  fontSize: "16px",
  textTransform: "lowercase",
  flexWrap: "nowrap",
});


function Navbar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    backgroundColor: "white",
    color: "#A6A6A6",
    borderRadius: theme.shape.borderRadius,
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {},
    },
  }));

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Box>
          <AppBar
            position="static"
            style={{
              backgroundColor: "#214f74",
              width: "100%",
              height: "95px"
            }}
          >
            <Toolbar className="navbar-row1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                }}
                className="navbar-row1-left"
              >

              <IconButton disableRipple>
                <Link to="/">
                  <img style={{padding:'1rem', width:'8vw' }} src={logo} alt="PB Tech logo" />
                </Link>
              </IconButton>


            <div>
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
                
                <StyledButton
                  variant="contained"
                  size="small"
                  style={{
                  backgroundColor: "#E2873C",
                  }}
                >
                  <SearchIcon />
                </StyledButton>
                </div>

              <div
                className="navbar-row1-right"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >

                <StyledButton
                  variant="contained"
                  size="xs"
                  startIcon={<PersonIcon />}
                >
                  <Typography sx={{fontSize:'12px', padding:'1rem'}}>Sign In or Create Account</Typography>
                  
                </StyledButton>

                <StyledButton
                  variant="contained"
                  size="xs"
                  startIcon={<FavoriteIcon />}
                >
                   <Typography sx={{fontSize:'12px', padding:'1rem'}}>Wish List</Typography>
                  
                </StyledButton>

                <StyledButton variant="contained" size="xs">
                  <ShoppingCartIcon />
                </StyledButton>
              </div>
            </div>
            </Toolbar>



            <Toolbar>
              <div
                className="navbar-row2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                  marginBottom:'2.2rem'
                }}
              >
                <div
                  className="navbar-row2-left"
                  style={{
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  <MenuIcon />
                  Departments
                </div>

                <div
                  style={{
                    display: "flex",
                  }}
                > 
                  <Typography sx={{marginRight:'1rem'}}>Brands</Typography>
                  <Typography sx={{marginRight:'1rem'}}>Services</Typography>
                  <Typography sx={{marginRight:'1rem'}}>Promotions</Typography>
                  <Typography sx={{marginRight:'1rem'}}>Clearance</Typography>
                  <Typography sx={{marginRight:'1rem'}}>New Arrivals</Typography>
                  <Typography sx={{marginRight:'1rem'}}>Tax Free Shipping</Typography>
                  <Typography sx={{marginRight:'1rem'}}>BYOD</Typography>
               </div>

               <div style={{
                    display: "flex",
                    alignContent:'space-around'}}>
               <Typography sx={{marginRight:'1rem'}}>Returns & Warranty</Typography>
                  <Typography sx={{marginRight:'1rem'}}>Careers</Typography>
                  <Typography sx={{marginRight:'1rem'}}>Help and support</Typography>
               </div>

                <div>
                  <Typography><StorefrontIcon />  Stores</Typography>
                </div>

              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
