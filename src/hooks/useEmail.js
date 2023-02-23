import React, { useState } from 'react'

export default function useEmail(key, value) {
  
    const [stateEmail, setStateEamil] = useState(value)
    let valueEmail

    const storageValueEmail = window.localStorage.getItem(key)
  
    if (storageValueEmail) {
        valueEmail = JSON.parse(storageValueEmail)
    }

    else {
        valueEmail = stateEmail
    }

    const setValue = (val) => {
        setStateEamil(val)
        window.localStorage.setItem(key, JSON.stringify(val))
    }

    return [value, setValue]
}
