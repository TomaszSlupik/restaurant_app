import { Card } from '@mui/material'
import React from 'react'
import './Bestmeals.scss'

export default function Bestmeals(props) {

    const meals = props.getbestmeal ()

    if (!meals) return null
    

  return (
    <div>
      <div className="bestmeals">
        <Card>
        <div>Najlepszy posiłek oceniany przez Klientów: {meals.name_meal}</div>
        <div>Ocena: {meals.rating}</div>
        </Card>
      </div>
    </div>
  )
}
