import React, { useCallback, useEffect, useState } from 'react'
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
import useTitlewebside from '../../hooks/useTitlewebside'
import { BrowserRouter as Router, Routes, Route, json } from 'react-router-dom'
import Profile from '../Profile/Profile'
import useEmail from '../../hooks/useEmail'

export default function Main()  {


  const [allproducts, setAllProducts] = useState(Data)
  const [colorTheme, setColorTheme] = useState('primary')
  const [loginveryfication, setLoginVeryfication] = useState(true)
  const [storage, setStorage] = useStorage('klucz', 'wartość początkowa')
  const [mealBest, setMealBest] = useStorage('Ostatnio kupione', null)

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

// Twoje zamówienie:
const [yourShopping, setYourShopping] = useState([])


// Ostatnio kupione - ostatnio kliknięto "Do koszyka"
const lastBuy = (allproducts) => {
    setMealBest(allproducts)

    console.log(allproducts.name_meal)
}


// Tytuł strony 
useTitlewebside('Tomasz Słupik')

// Propsy do Logowania
const [email, setEmail] = useState(null)
console.log(email)

const [storageEamil, setStorageEmail] = useEmail('Twójemail', email)
console.log(storageEamil)




  return (
    <div>
              <div className='main'>
                <LoginContext.Provider value={{
                  isLogin: loginveryfication, 
                  login: () => setLoginVeryfication(true),
                  logout: () => setLoginVeryfication(false)
                }}>
                <Router>
                  <Routes>
                  <Route path='/' element={ 
                  <Layout 
                  menu={<Menu colorTheme={colorTheme} email={email} setEmail={setEmail} storageEamil={storageEamil} />}
                  countmeals={<Countmeals allproducts={allproducts}/>}
                  bestmeals={<Bestmeals getbestmeal={bestMeals}/>}
                  drawmeal={<Drawmeals allproducts={allproducts} colorTheme={colorTheme}/>}
                  yourbestmeal={<Yourbestmeals {...mealBest} storage={storage} setStorage={setStorage}/>}
                  header={<Header searchMeal={searchMeal} allProductList={allProductList} changeColor={changeColor}/>}
                  meals={<Meals allproducts={allproducts} setAllProducts={setAllProducts} colorTheme={colorTheme} lastBuy={lastBuy}/>}
                  />} />

                 <Route path='/profile' element={<Profile email={email}  />} />
                  </Routes>
                </Router>
                </LoginContext.Provider>
              </div>
    </div>
  )
}
