import * as React from 'react';
import { AppBar, Button, InputBase, styled, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import { useState } from 'react';
import logo from './logo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MenuIcon from '@mui/icons-material/Menu';

// const pages = ['Card', 'Carousel', 'Table'];

  
const StyledButton = styled(Button)({
    backgroundColor: '#1e4261'
})

// const StyledIconButton = styled(IconButton)({
//     backgroundColor: '#1e4261'
// })

function Navbar() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
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
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
    
    return (
        <div className="navbar">
            {/* <div className="navbar-container"> */}
                <Box sx={{flexGrow: 1, marginBottom: 0}}>
                    <AppBar 
                    position='static'
                    style={{ backgroundColor: "#214f74", height: "136px" }}
                    >
                        <Toolbar className="navbar-row1">
                            <Typography
                                noWrap
                                component="div"
                                sx={{mr: 2, display: 'none', md: 'flex'}}
                            >
                                <img src={logo} style={{width: 152, height: 29 }} alt='logo'/>
                            </Typography>
                            <Search 
                                style={{ width:"923px", height: "37px", backgroundColor: "white"}}
                            >
                                <StyledInputBase
                                    placeholder="Search by keywords or part #"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <StyledButton variant='contained' size='medium' style={{ backgroundColor: "#E2873C"}}>
                                <SearchIcon/>
                            </StyledButton>
                            <StyledButton variant='contained' size='medium' startIcon={<PersonIcon/>}>
                                Sign In or Create Account
                            </StyledButton>
                            <StyledButton variant='contained' size='medium' startIcon={<FavoriteIcon/>}>
                                Wish List
                            </StyledButton>
                            <StyledButton variant='contained' size='medium'>
                                <ShoppingCartIcon/>
                            </StyledButton>
                            
                            {/* <div className="navbar-row2">
                            <StyledIconButton size='large'>
                                <MenuIcon/>
                            </StyledIconButton>
                            Departments
                            Brands
                            Services
                            Promotions
                            Clearance
                            New Arrivals
                            Tax Free Shipping
                            BYOD
                            Returns & Warranty
                            Careers
                            Help and support
                            Stores
                            </div> */}

                        </Toolbar>
                    </AppBar>
                </Box>
            {/* </div> */}

        </div>
    )
}

export default Navbar;
