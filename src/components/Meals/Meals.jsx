import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Meals.scss'
import { ThemeProvider } from '@emotion/react';
import breakpoints from '../../theme/breakpoints';
import Mycard from '../../style/mycard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import themeColor from '../../theme/theme';

export default function Meals({allproducts, setAllProducts, colorTheme}) {

    console.log('Posiłki')

  return (
    <div className='meals'>
        <div className="meals__box">
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }} > 
        <ThemeProvider theme={breakpoints}>
        {allproducts.map((el, index) => {
            return (
                     <Grid item xs={12} sm={12} md={6} key={index} style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em'}}>
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
                <ThemeProvider theme={themeColor}>
                <IconButton color={colorTheme} aria-label="add to shopping cart">
                        Do koszyka
                <AddShoppingCartIcon />
                </IconButton>
                </ThemeProvider>
                </CardActions>
                </Card>
                </Mycard>
                </Grid>
               
                 )
                })} 
        </ThemeProvider>
   </Grid>
    </Box>
        </div>
    </div>
  )
}
