import React from 'react'
import useLogin from '../../hooks/useLogin'
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import themeColor from '../../theme/theme';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';

import { useState} from 'react';
import Register from '../Register/Register';


export default function Menu({colorTheme, email, setEmail, storageEamil}) {

    const [login, setLogin] = useLogin()

    const loginveryfication = (e) => {
        e.preventDefault()
        setLogin(false)
    }

    const logouteryfication = (e) => {
        e.preventDefault()
        setLogin(true)
    }

    // Przejście do profilu
    let navigate = useNavigate()
    const goToProfile = () => {
        navigate('/profile')
    }

    // Panel logowania i rejestracji
    const [loginShow, setLoginShow] = useState(false)
     const [registerShow, setRegisterShow] = useState(false)

    const changeShowLogin = () => {
        setLoginShow(true)
        setRegisterShow(false)

    }

    const changeShowRegister = () => {
      setRegisterShow(true)
      setLoginShow(false)
    }
 


  return (
    <div>
      <ThemeProvider theme={themeColor}>
        {
            login ? 
             <> 
            <Button
            onClick={changeShowRegister}
            >Rejestracja</Button>
            <Button
            onClick={changeShowLogin}
            >Logowanie</Button>
            {
              loginShow ?  <Login
              email={email} setEmail={setEmail}
              colorTheme={colorTheme} loginveryfication={loginveryfication}/>
              :
              registerShow ?
              <Register 
              colorTheme={colorTheme} loginveryfication={loginveryfication}
              />
              : <div>Jeżeli nie masz konta, zarejestruj się. Mając konto możesz zamawiać posiłki i korzystać z promocji.</div>
            }
           
             </> 
             :
             <>
             <Button
             color={colorTheme}
             variant="contained"
             onClick={goToProfile}
             >
               Profil
               <AccountCircleIcon />
             </Button>
 
             <Button
             color={colorTheme}
             variant="contained"
             onClick={logouteryfication}
             >Wyloguj
             <LogoutIcon />
             </Button>
             </>
             
        }
        </ThemeProvider>
  
    </div>
  )
}
