import React from 'react'

export default function Layout(props) {
  return (
    <div>
        <div>{props.header}</div>
        <div>{props.menu}</div>
        <div>{props.countmeals}</div>
        <div>{props.bestmeals}</div>
        <div>{props.yourbestmeal}</div>
        <div>{props.drawmeal}</div>
        <div>{props.meals}</div>
    </div>
  )
}
