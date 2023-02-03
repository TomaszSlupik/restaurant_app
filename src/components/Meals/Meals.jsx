import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Data from '../../data/data.json'
import './Meals.scss'


export default function Meals() {

const [meals, setMeals] = useState(Data)

const style = {
    card: {
        maxWidth: '345px', height: '345px'
    }
}

  return (
    <div className='meals'>
        <div className="meals__box">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>    
        {meals.map((el, index) => {
        return (
            <div key={index}>
                 <Grid item xs={12} sm={6} md={4}>
                <Card style={style.card}>
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
                </Grid>
            </div>
        )
    })}
    </Grid>
        </div>
    </div>
  )
}
