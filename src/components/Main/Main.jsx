import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../Header/Header'
import Meals from '../Meals/Meals'
import Data from './../../data/data.json'
import './Main.scss'
import Menu from '../Menu/Menu'

export default function Main()  {


  const [allproducts, setAllProducts] = useState(Data)
  const [colorTheme, setColorTheme] = useState('primary')

// Wyszukiwarka 
const searchMeal = (inputValue) => {
    console.log('szukaj posiłków')
    const searchMeal  = allproducts.filter((el) => 
    el.name_meal.toLowerCase().includes(inputValue.toLowerCase()))
    setAllProducts(searchMeal)
}

// Wszystkie produkty na liście
const allProductList = () => {
  setAllProducts(Data)
}

// Zmiana koloru Layoutu
const changeColor = () => {
  const newColorTheme = colorTheme === 'primary' ? 'secondary' : 'primary'
  setColorTheme(newColorTheme)
}

  return (
    <div>
              <div className='main'>
                <Layout 
                  menu={<Menu />}
                  header={<Header searchMeal={searchMeal} allProductList={allProductList} changeColor={changeColor}/>}
                  meals={<Meals allproducts={allproducts} setAllProducts={setAllProducts} colorTheme={colorTheme}/>}
                  />

              </div>
    </div>
  )
}
