import React from 'react'
import Layout from '../../layout/Layout'
import Header from '../Header/Header'
import Meals from '../Meals/Meals'

export default function Main() {
  return (
    <div>
        <Layout 
        header={<Header />}
        meals={<Meals />}
        />
    </div>
  )
}
