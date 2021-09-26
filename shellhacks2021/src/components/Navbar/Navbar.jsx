import React from 'react'
import { TextField, Grid, Paper, AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed"  color="inherit">
                <Toolbar>
                <Typography  to="/JEG-Website" variant="h6"  color="inherit">
                    Cost of Living Calc
                </Typography>
                <div />
                <div>
                    <IconButton to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge color="secondary">
                    </Badge>
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
