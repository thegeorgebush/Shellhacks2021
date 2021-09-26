import React from 'react'
import { TextField, Grid, Paper, Typography, Table, TableBody, rows, TableCell, TableRow } from '@material-ui/core';
import useStyles from './Styles';

const Inputcard = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={2}>
                <Grid
                item
                xs={12}
                sm={8}
                md={7}
                >
                <Paper>
                    <Grid container justify="center" spacing={2}>
                    <Grid item>
                        <TextField id="outlined-basic" label="Hourly Pay Rate" variant="outlined" />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" label="Hours worked per week" variant="outlined" />
                    </Grid>
                    </Grid>
                </Paper>
                </Grid>
                <Grid
                item
                xs={12}
                sm={8}
                md={3}
                >
                <Paper>
                    <h1>$1500</h1>
                </Paper>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={2}>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={10}
                >
                    <Paper>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>Output</Typography>
                        <Table size="small">
                            <TableBody>
                                <TableRow key={0}>
                                    <TableCell>Paycheck:</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                                <TableRow key={0}>
                                    <TableCell>Gross Income:</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                                <TableRow key={0}>
                                    <TableCell>Tax:</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                                <TableRow key={0}>
                                    <TableCell>Entitlements:</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                                <TableRow key={0}>
                                    <TableCell>Net Income:</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                                <TableRow key={0}>
                                    <TableCell>Ideal Monthly Rent:</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                                <TableRow key={0}>
                                    <TableCell>Ideal Monthly expenses:</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                                <TableRow key={0}>
                                    <TableCell>Ideal Yearly Spending:</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                                <TableRow key={0}>
                                    <TableCell>Ideal Yearly Savings:</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </main>
    )
}

export default Inputcard
