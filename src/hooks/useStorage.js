import { useState } from 'react'

export default function useStorage(key, defaultValue) {

    const [state, setState] = useState(defaultValue)
    let value;

    const storageValu = window.localStorage.getItem(key)
    if (storageValu) {
        value = JSON.parse(storageValu)
    }
    else {
        value = state
    }

    const setValue = (val) => {
        setState(val)
        window.localStorage.setItem(key, JSON.stringify(val))
    }

    
  return [value, setValue]
}
