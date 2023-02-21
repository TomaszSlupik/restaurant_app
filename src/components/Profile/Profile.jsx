import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

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
        <div>Twoje zamówienie:</div>
        
    </div>
  )
}
