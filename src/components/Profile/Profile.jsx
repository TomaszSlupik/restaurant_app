import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile({email}) {

    let navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    
    

  return (
    <div>
        <Button
        onClick={goToHome}
        >
            Home
        </Button>
        <div>Twój profil</div>
        <div>Email: {email}</div>
       
        <div>Twoje zamówienie:</div>
        <div></div>
    </div>
  )
}
