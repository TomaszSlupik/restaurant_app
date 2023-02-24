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
import mykey from '../../key/key'



export default function Login({colorTheme, email, setEmail}) {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    // Logowanie - przechwycenie inputów
    // const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin] = useLogin()
    const [valid, setValid] = useState(null)
    const [error, setError] = useState()
    const [id, setId] = useState()
    const [loginParam, setLoginParam] = useState()

    const submit = async (e) => {
        e.preventDefault()
        try {
          const res = await mykey.post('/accounts:signInWithPassword', {
            email : email,
            password: password,
            returnSecureToken: true
          })
       

          setLogin(false, {
            email: res.data.email, 
            token: res.data.idToken,
            id: res.data.localId
          })

          setError(false)
        }
        catch (ex) {
          setLogin(true)
          console.log(ex.response)
          setError(ex.response.data.error.message)
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
                  {
                      error ? 
                      <Alert severity="error">{error}</Alert> 
                      :
                      null
                  }
                </div>
              </div>
              </ThemeProvider>
             </form>
  
  )
}
