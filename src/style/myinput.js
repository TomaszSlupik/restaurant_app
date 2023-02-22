import {styled} from '@mui/system';


const Myinput = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        width: '80%',  
        height: '60px'
    }, 
    

}))

export default Myinput