import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react';
import breakpoints from '../../theme/breakpoints';
import Myinput from '../../style/myinput';
import themeColor from '../../theme/theme';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import useLogin from '../../hooks/useLogin';
import Alert from '@mui/material/Alert';
import mykey from '../../key/key';

export default function Register({colorTheme, loginveryfication}) {

    // Ukrywanie/ Wyświetalnie hasła
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

   //    Logika do rejestraji 
   const [register, setRegister] = useLogin()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const [error, setError] = useState()


    const submitRegister = async (e) => {
        e.preventDefault()
        

    // Backend 
    
    try {
        const res = await mykey.post ('/accounts:signUp', {
        email : email,
        password: password,
        returnSecureToken: true
    })
    
    console.log(res.data)
    setRegister(false, res.data)
    setError(false)
    }
    catch (ex){
        e.preventDefault()
        console.log(ex.response)
        setError(ex.response.data.error.message)
        setRegister(true)
    }
    }


  return (
    <form action='' onSubmit={submitRegister}>
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
        onClick={submitRegister}
        >Rejestracja
        <HowToRegIcon />
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
