import React from 'react'
import { TextField, Grid, Paper, Typography, Table, TableBody, rows, TableCell, TableRow, Button } from '@material-ui/core';
import useStyles from './Styles';
import axios from 'axios';
import { useEffect, useState } from 'react';

import grossIncomeCard from './grossIncomeCard';

const api = axios.create({
    baseURL: 'http://localhost3000/'
})

const Inputcard = () => {
    const classes = useStyles();
    const [post, setPost] = useState([]);
    const [grossIncome, setGrossIncome] = useState('');

    const postAxios = async () => {
        let request = {
            hourlyPay: 12,
            hoursWorked: 12
        }
        const response = await axios.post('http://localhost:5000/', request)
        console.log(response);
        if(!response) console.log("no response");
    }

    function onSubmit(event) {
        event.preventDefault();
        postAxios();
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const request = {
                    hourlyPay: "12",
                    hoursWorked: "12"
                }
                const response = await axios.post('http://localhost:5000/submit', request, {params: {hourlyPay: "12",
                hoursWorked: "12"}})
                setPost(JSON.stringify(response.data));
                setGrossIncome(post.grossIncome)
                console.log(response)
                console.log("POST OUTPUT: ", post)

                console.log("gross income: ", post.grossIncome)
            } catch (err) {
                if(err.response){
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`) 
                }
            }
        }

        fetchPosts();
    }, [])

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
                        <TextField id="hourPay" label="Hourly Pay Rate" variant="outlined" />
                    </Grid>
                    <Grid item>
                        <TextField id="hoursWorked" label="Hours worked per week" variant="outlined" />
                    </Grid>
                    <Grid item>
                        <Button onClick={onSubmit} variant="contained">Submit</Button>
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
                    <grossIncomeCard grossIncome={post.grossIncome} />
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
