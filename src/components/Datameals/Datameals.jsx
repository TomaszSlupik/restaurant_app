import { TextField} from '@mui/material'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import axios from '../../axios'



export default function Datameals() {

//    Dodanie danych do bazy danych 
    const [formMeal, setFormMeal] = useState({
        name_meal: '', 
        price: '10zł'
    })

    const addMeal = async (e)  => {
        e.preventDefault()
        
        const {name_meal, price} = formMeal

        const res = await fetch('https://restaurantreact-c8bb4-default-rtdb.firebaseio.com/meals.json',

        {
            method: 'POST', 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name_meal,
                price
            })
        })
        
        }


//      Pobieranie danych z Backendu
        const [yourShopping, setYourShopping] = useState([])

        useEffect(() => {
            readData()
        }, [])

        const readData = async () => {
            try {
                const res = await axios.get('/meals.json')

                const newmeal = []

                for (const key in res.data) {
                    newmeal. push ({...res.data[key], id: key})
                }
                setYourShopping(newmeal)
            }
            catch (ex) {
                console.log(ex.response)
            }

        }



  return (
    <div>
        <>
        <div>
            {yourShopping.map ((el, index) => {
                return (
                    <>
                    <div key={index}>{el.name_meal}</div>
                    <div>{el.price}</div>
                    </>
                )
            })}
        </div>
        <form>
            
            <TextField 
            onChange={e => setFormMeal({...formMeal, name_meal: e.target.value})}
            value={formMeal.namemeal}
            />
            <TextField 
            onChange={e => setFormMeal({...formMeal, price: e.target.value})}
            value={formMeal.price}
            />
            <Button onClick={addMeal}>Dodaj</Button>
        </form> 
        </>
    </div>
  )
}
