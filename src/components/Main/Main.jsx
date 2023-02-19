import React, { useCallback, useState } from 'react'
import Layout from '../../layout/Layout'
import Header from '../Header/Header'
import Meals from '../Meals/Meals'
import Data from './../../data/data.json'
import './Main.scss'
import Menu from '../Menu/Menu'
import Countmeals from '../Countmeals/Countmeals'
import Bestmeals from '../Bestmeals/Bestmeals'
import Drawmeals from '../Drawmeal/Drawmeals'
import LoginContext from '../../context/loginContext'
import useStorage from '../../hooks/useStorage'
import Yourbestmeals from '../Yourbestmeals/Yourbestmeals'

export default function Main()  {


  const [allproducts, setAllProducts] = useState(Data)
  const [colorTheme, setColorTheme] = useState('primary')
  const [loginveryfication, setLoginVeryfication] = useState(true)
  const [storage, setStorage] = useStorage('klucz', 'wartość początkowa')
  const [mealBest, setMealBest] = useStorage(null)

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

// Najlepsza oferta posiłku
const bestMeals = useCallback (() => {
  if (allproducts.length === 0) {
    return null
  }
  else {
    return allproducts.sort((a, b) => a.rating > b.rating ? -1 : 1)[0]
  }
}, [allproducts])

// Ostatnio kupione
const lastBuy = (allproducts) => {
    console.log(allproducts)
    // setMealBest(meal)
}



  return (
    <div>
              <div className='main'>
                <LoginContext.Provider value={{
                  isLogin: loginveryfication, 
                  login: () => setLoginVeryfication(true),
                  logout: () => setLoginVeryfication(false)
                }}>
                <Layout 
                  menu={<Menu />}
                  countmeals={<Countmeals allproducts={allproducts}/>}
                  bestmeals={<Bestmeals getbestmeal={bestMeals}/>}
                  drawmeal={<Drawmeals allproducts={allproducts}/>}
                  yourbestmeal={<Yourbestmeals storage={storage} setStorage={setStorage}/>}
                  header={<Header searchMeal={searchMeal} allProductList={allProductList} changeColor={changeColor}/>}
                  meals={<Meals allproducts={allproducts} setAllProducts={setAllProducts} colorTheme={colorTheme} lastBuy={lastBuy}/>}
                  />
                </LoginContext.Provider>
              </div>
    </div>
  )
}
