import React from 'react'
import useLogin from '../../hooks/useLogin'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import themeColor from '../../theme/theme';

export default function Menu({colorTheme}) {

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
      <ThemeProvider theme={themeColor}>
        {
            
            login ? 
            <Button
            color={colorTheme}
            variant="contained"
            onClick={logouteryfication}
            >Wyloguj
            <LogoutIcon />
            </Button>
             : 
             <Button 
             color={colorTheme}
             variant="contained"
             onClick={loginveryfication}
             >Zaloguj
             <LoginIcon />
             </Button> 
             
        }
        </ThemeProvider>
    </div>
  )
}
