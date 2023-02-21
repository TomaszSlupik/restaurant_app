import { Card } from '@mui/material'
import React from 'react'
import './Bestmeals.scss'
import Rating from '@mui/material/Rating';

export default function Bestmeals(props) {

    const meals = props.getbestmeal ()

    if (!meals) return null
    
    const style = {
      card: {height: '100px', padding: '0.4em 0.4em', backgroundColor: '#926F33'}
    }

  return (
    <div>
      <div className="bestmeals">
        <div className="bestmeals__box">
            <Card style={style.card}>
            <div className='bestmeals__box-text'>Najlepszy posiłek oceniany przez Klientów: {meals.name_meal}</div>
            <div className='bestmeals__box-mark'>Ocena: 
            <Rating name="read-only" value={meals.rating} 
                    precision={0.5}
                    readOnly />
              </div>
            </Card>
        </div>
      </div>
    </div>
  )
}
