import React from 'react'
import useLogin from '../../hooks/useLogin'


export default function Menu() {

    const [login, setLogin] = useLogin()

    const loginveryfication = (e) => {
        e.preventDefault()
        setLogin(true)
    }

    const logouteryfication = (e) => {
        e.preventDefault()
        setLogin(false)
    }

  return (
    <div>
        {
            login ? 
            <div
            onClick={logouteryfication}
            >Wyloguj</div>
             : 
             <div
             onClick={loginveryfication}
             >Zaloguj</div>
        }
    </div>
  )
}
