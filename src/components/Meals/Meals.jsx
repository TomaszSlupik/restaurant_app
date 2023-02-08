import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import './Meals.scss'
import { ThemeProvider } from '@emotion/react';
import breakpoints from '../../theme/breakpoints';
import Mycard from '../../style/mycard';


export default function Meals({allproducts, setAllProducts}) {

  return (
    <div className='meals'>
        <div className="meals__box">
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>  
        {allproducts.map((el, index) => {
            return (
                <div key={index}>
                <ThemeProvider theme={breakpoints}>
                 <Grid item xs={12} sm={6} md={4}>
                 <Mycard>
                <Card>
                <CardMedia
                    component="img"
                    alt={el.name_meal}
                    height="140"
                    image={process.env.PUBLIC_URL + el.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {el.name_meal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {el.describe}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                </Mycard>
                </Grid>
                </ThemeProvider>
                </div>  
            )
        })}

    </Grid>
    </Box>
        </div>
    </div>
  )
}
