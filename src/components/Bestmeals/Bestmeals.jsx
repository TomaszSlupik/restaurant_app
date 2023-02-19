import React from 'react'

export default function Bestmeals(props) {

    const meals = props.getbestmeal ()

    if (!meals) return null
    

  return (
    <div>
        <div>Najlepszy posiłek oceniany przez Klientów: {meals.name_meal}</div>
        <div>Ocena: {meals.rating}</div>
    </div>
  )
}
