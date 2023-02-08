import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../Header/Header'
import Meals from '../Meals/Meals'
import Data from './../../data/data.json'

export default function Main() {

  const [allproducts, setAllProducts] = useState(Data)
  
  const searchMeal = () => {
    console.log('szukaj posiłków')
}

  return (
    <div>
              <div>
                <Layout 
                  header={<Header searchMeal={searchMeal}/>}
                  meals={<Meals allproducts={allproducts} setAllProducts={setAllProducts}/>}
                  />
              </div>
    </div>
  )
}
