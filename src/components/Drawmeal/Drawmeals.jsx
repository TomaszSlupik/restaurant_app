import React, {useEffect, useState} from 'react'
import moment from 'moment/moment'
import useLogin from '../../hooks/useLogin'

export default function Drawmeals({allproducts}) {

const meal = allproducts.map (el => el.name_meal)
const bestmeal = 10
const [drawmeal, setDrawMeal] = useState("")


const [time, setTime] = useState('')
const endTime = moment().add(15, 'minutes').add(15, 'seconds')

// Losowanie posiłku z bazy
const randomMeal = () => {
    setDrawMeal(meal[Math.floor(Math.random() * meal.length)])
}

// Zalogowani użytkownicy
const [login] = useLogin()

// Ile pozostało do oferty
useEffect(()=> {
    setInterval(() => {
        const leftTime = -moment().diff(endTime) / 1000
        const minutes = Math.floor(leftTime / 60)
        const sec = Math.floor(leftTime % 60)
        setTime(`${minutes > 0 ? minutes : 0} min ${sec > 0 ? sec : 0} sec`)
    }, 1000);
}, [])


  return (
    <div>
        <div>Wylosuj posiłek za {bestmeal} zł</div>
        {
            
            login ? 
            <div>
            <div>{drawmeal}</div>
            <div>Do końca oferty pozostało: {time}</div>
            <button 
            onClick={randomMeal}>Losuj</button>
            </div>
            :
            <div>Aby wylosować posiłek musisz zalogować się </div>
        }
        
    </div>

  )
}
