import { makeStyles } from '@mui/material'
import React from 'react'

const useStyles = makeStyles({
    page: {
        background: '#f9fbff',
        width: '100%'
    }
})

function Layout({children}) {
    const classes =useStyles()

    return (
        <div>
            {/* <Appbar>
            <Side drawer></Side> */}
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout