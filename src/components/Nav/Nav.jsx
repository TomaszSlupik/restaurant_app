import React, { useEffect, useState, useRef } from 'react'
import './Nav.scss'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import PaletteIcon from '@mui/icons-material/Palette';
import { ThemeProvider } from '@mui/material';
import themeColor from '../../theme/theme';

export default function Nav(props) {

  const [inputValue, setInputValue] = useState('')

  const style = {
    palette: {fontSize: '3rem', cursor: 'pointer', color: '#fff'}, 
    
  }

  const inputText = (e) => {
    props.searchMeal(inputValue)
    setInputValue(e.target.value)
  }

  const checkKeyBackspace = (e) => {
      if (e.key === 'Backspace') {
        props.allProductList()
      }
  }

  const changePalette = () => {
    props.changeColor()
  }



  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    focusInput()
  }, [])

  return (
    <div>
        <ThemeProvider theme={themeColor}>
        <div className='nav' style={style.nav}>
            <PaletteIcon 
            onClick={changePalette}
            style={style.palette} />
            <div className="nav__search">
            <Paper component="form"
            style={{width: '255px'}}
            
            >
            <InputBase
                inputRef={inputRef}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Wyszukaj dania"
                inputProps={{ 'aria-label': 'search meals' }}
                onKeyDown={checkKeyBackspace}
                onChange={inputText}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
            </IconButton>
            </Paper>
            </div>
        </div>
        </ThemeProvider>
    </div>
  )
}