import { Card } from '@mui/material'
import React from 'react'
import useLogin from '../../hooks/useLogin'
import './Yourbestmeals.scss'


export default function Yourbestmeals(props) {

    const [login] = useLogin()


  return (
    <div>
        {
            login ? 
            null 
            :
            <div className="yourbestmeal">
            <div className="yourbestmeal__box">
                <Card className='yourbestmeal__box-card'>
                    <img className='yourbestmeal__box-card--img' src={process.env.PUBLIC_URL + props.image} alt={props.name_meal}/>
                    <div className='yourbestmeal__box-card--text'>Ostatnio kupiłeś:</div> 
                    <div className='yourbestmeal__box-card--text'>{props.name_meal}</div>
                  </Card>
            </div>
          </div>
        }
    </div>
  )
}

