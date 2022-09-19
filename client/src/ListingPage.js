import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import ButtonGroup from '@material-ui/material/ButtonGroup';
import ShoppingCartIcon from '@material-ui/icons-material/ShoppingCart';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({ 
    btn: {
        fontSize: 60, //60px
        backgroundColor: '#ee8022',
        '&:hover': {
            backgroundColor: 'black'
        }
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    }
})

export default function ListingPage() {
    const classes = useStyles()
    
    return (
        <Container>
            <Typography 
                className={classes.title}
                variant ="h1"
                color="primary"
                color="textSecondary"
                align="center"
                gutterBottom
            >
                Lorem ipsum 
            </Typography>

            <Button 
                className={classes.btn}
                onClick={() => console.log('add to cart')}
                type="submit" 
                variant="contained"
                startIcon={<ShoppingCartIcon />}
            >
                Add to Cart
            </Button>

            {/* <ButtonGroup //page numbers
                color="secondary"
                variant="outlined"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}

            {/* icons
            <ShoppingCartIcon /> */}

        </Container>
    )
}