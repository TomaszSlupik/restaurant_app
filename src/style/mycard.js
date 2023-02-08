import {styled} from '@mui/system';


const Mycard = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        minWidth: '345px',  
        marginTop: '0.8em'
    }, 
    [theme.breakpoints.up('sm')] : {
        minWidth: '345px', 
        minHeight: '300px', 
        marginTop: '0.8em'
    }, 
    [theme.breakpoints.up('md')] : {
        minWidth: '345px', 
        minHeight: '300px', 
        margin: '0.8em 0.8em'
    }, 
    [theme.breakpoints.up('lg')] : {
        minWidth: '345px', 
        minHeight: '300px', 
        margin: '0.8em 0.8em'
    }, 

}))

export default Mycard