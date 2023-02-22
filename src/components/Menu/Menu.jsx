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


export default function Menu({colorTheme}) {

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

    const [loginShow, setLoginShow] = useState(false)

    const changeShowLogin = () => {
        setLoginShow(true)
    }
 
  //   const loginCard = useRef(null)


  //   useEffect (() => {
  //     changeShowLogin()
  // }, [])


  return (
    <div>
      <ThemeProvider theme={themeColor}>
        {
            login ? 
             <>
            <Button>Rejestracja</Button>
            <Button
            onClick={changeShowLogin}
            >Logowanie</Button>
            {
              loginShow ?  <Login
              // ref={loginCard} 
              colorTheme={colorTheme} loginveryfication={loginveryfication}/>
              :
              <div>Rejestracja</div>
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
