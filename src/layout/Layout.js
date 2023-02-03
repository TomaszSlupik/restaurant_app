import React from 'react'

export default function Layout(props) {
  return (
    <div>
        <div>{props.header}</div>
        <div>{props.meals}</div>
    </div>
  )
}
