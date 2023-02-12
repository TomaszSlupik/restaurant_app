import React, { useState } from 'react'
// import LoginContext from '../../context/loginContext'

export default function Menu() {

    // const loginverification = useContext(LoginContext)
    const [loginverification, setLoginVerification] = useState (false)

    const login = (e) => {
        e.preventDefault()
        setLoginVerification(true)
    }

    const logout = (e) => {
        e.preventDefault()
        setLoginVerification(false)
    }

  return (
    <div>
        {
            loginverification ? 
            <div
            onClick={logout}
            >Wyloguj</div>
             : 
             <div
             onClick={login}
             >Zaloguj</div>
        }
    </div>
  )
}
