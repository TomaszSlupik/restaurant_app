import React from 'react'
import useLogin from '../../hooks/useLogin'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import themeColor from '../../theme/theme';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material'

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

    // Przejście do profilu
    let navigate = useNavigate()
    const goToProfile = () => {
        navigate('/profile')
    }

  return (
    <div>
      <ThemeProvider theme={themeColor}>
        {
            
            login ? 
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
             : 
             <>
              <TextField 
              color={colorTheme}
              id="outlined-basic" label="email" variant="outlined" />
              <TextField 
              color={colorTheme}
              id="outlined-basic" label="hasło" variant="outlined" />
        
             <Button 
             color={colorTheme}
             variant="contained"
             onClick={loginveryfication}
             >Zaloguj
             <LoginIcon />
             </Button> 
             </>
             
        }
        </ThemeProvider>
    </div>
  )
}
