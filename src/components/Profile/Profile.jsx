import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import axios from 'axios'
import useLogin from '../../hooks/useLogin';
import mykey from '../../key/key';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Profile({email, yourShopping}) {

    let navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    // Otwieranie okna 
    const [openWindow, setOpenWindow] = useState(false)

    const openBox = () => {
      setOpenWindow(true)
    }
    const closeBox = () => {
      setOpenWindow(false)
    }


    const [changeEmail, setChangeEmail] = useState(email)
    const [token, setToken] = useState()
    const [login]= useLogin()

    const changeEmailInput = (e) => {
        setChangeEmail(e.target.value)
        console.log(changeEmail)
    }
    
    const acceptChange = async (e) => {
      e.preventDefault()
      setOpenWindow(false)
      try {
        const res = await mykey.post('accounts:update', {
            idToken: login.token,
            email: changeEmail, 
            returnSecureToken: true
        })
        
        // setChangeEmail({
        //   changeEmail: res.data.changeEmail
        // })
        console.log(res)
    }
    catch (ex){
      console.log(ex.response)
    }

    }

  return (
    <div>
        <Button
        onClick={goToHome}
        >
            Home
        </Button>
        <div>Twój profil</div>
        <div>Email: {changeEmail}</div>
        <Button
        onClick={openBox}
        >
          Zmień e-mail
        </Button>
            <Dialog
            open={openWindow}
            TransitionComponent={Transition}
            keepMounted
            onClose={closeBox}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Zmiana e-maila"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                
                <div>Wpisz swój nowy e-mail</div>
                <TextField 
                value={changeEmail}
                 variant="outlined"
                 onChange={changeEmailInput}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeBox}>Wyjście</Button>
              <Button onClick={acceptChange}>Akceptuję</Button>
            </DialogActions>
          </Dialog>


        <div>Twoje zamówienie:</div>
        {
          yourShopping ? 
          (
            <div>
              {
                yourShopping.map (el => {
                  return (
                    <div>{el.name_meal}</div>
                  )
                })
              }
            </div>
          )
          :
          (
            <div>Brak zamówienia</div>
          )
        }
        <div></div>
    </div>
  )
}
