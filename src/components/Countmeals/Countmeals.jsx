import React, { useMemo } from 'react'
import './Countmeals.scss'
import RamenDiningIcon from '@mui/icons-material/RamenDining';

export default function Countmeals({allproducts}) {

const countListMeal = (countMeal) => {
    for (let i = 0; i < countMeal.length; i++) {}
    return countMeal
}

function Mealscount (props) {
    const countMeal = useMemo(() => {
        return countListMeal(allproducts.length)
    }, [allproducts.length])
}


  return (
    <div>
            <div className='countmeals'>
                <RamenDiningIcon style={{fontSize: '2rem'}}/>
                <div className='countmeals__header'>Liczba dostępnych posiłków w menu:</div>
                 <div className='countmeals__length'>{allproducts.length}</div>
            </div>
    </div>
  )
}
