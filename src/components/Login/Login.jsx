import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import useLogin from '../../hooks/useLogin';
import Alert from '@mui/material/Alert';
import './Login.scss'
import { ThemeProvider } from '@emotion/react';
import breakpoints from '../../theme/breakpoints';
import Myinput from '../../style/myinput';
import themeColor from '../../theme/theme';




export default function Login({colorTheme, loginveryfication}) {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    // Logowanie - przechwycenie inputów
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [auth, setAuth] = useLogin()
    const [valid, setValid] = useState(null)

    const submit = (e) => {

        if (true) {
          e.preventDefault()
          setAuth(true)
          console.log(auth)
          loginveryfication(e)
        }
        else {
          setValid(false)
          setPassword('')
        }
      }
      

  return (
         <form action='' onSubmit={submit}>
              {
              valid === false ?
              <Alert severity="error">Niepoprawne dane logowania!</Alert> 
              :
              null 
              }
              <ThemeProvider theme={breakpoints, themeColor}>
              <div className='form'>
                <div className="form__email">
                    <Myinput
                    color={colorTheme}
                    >
                    <TextField 
                  style={{width: '100%', height: '100%'}}
                  color={colorTheme}
                  id="outlined-basic" 
                  type="email"
                  name='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  label="email" variant="outlined" />
                    </Myinput>

                </div>
                <div className="form__password">
                <Myinput>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  color={colorTheme}
                  label="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{width: '100%', height: '100%'}}
                />
                </Myinput>
                </div>
                <div className="form__btn">
                <Button 
                  color={colorTheme}
                  variant="contained"
                  onClick={submit}
                  >Zaloguj
                  <LoginIcon />
                  </Button> 
                </div>
              </div>
              </ThemeProvider>
             </form>
  
  )
}
