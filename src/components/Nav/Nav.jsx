import React from 'react'
import './Nav.scss'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';


export default function Nav() {


  return (
    <div>
        <div className='nav'>
            <div className="nav__search">
            <Paper component="form"
            style={{width: '255px'}}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Wyszukaj dania"
                inputProps={{ 'aria-label': 'search meals' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
            </IconButton>
            </Paper>
            </div>
        </div>
    </div>
  )
}