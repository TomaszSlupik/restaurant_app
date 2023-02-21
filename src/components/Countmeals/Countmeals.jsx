import React, { useMemo } from 'react'
import './Countmeals.scss'

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
            <div >
                Liczba posiłków w menu: {allproducts.length}
            </div>
    </div>
  )
}
