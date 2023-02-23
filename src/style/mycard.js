import {styled} from '@mui/system';


const Mycard = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        width: '345px',  
        marginTop: '0.8em'
    }, 
    [theme.breakpoints.up('sm')] : {
        width: '345px', 
        minHeight: '300px', 
        marginTop: '0.8em'
    }, 
    [theme.breakpoints.up('md')] : {
        width: '345px', 
        minHeight: '300px', 
        margin: '0.8em 0.8em'
    }, 
    [theme.breakpoints.up('lg')] : {
        minWidth: '345px', 
        minHeight: '300px', 
        margin: '0.8em 0.8em'
    }, 
    [theme.breakpoints.up('xl')] : {
        minWidth: '345px', 
        minHeight: '300px', 
        margin: '0.8em 0.8em'
    }, 
    [theme.breakpoints.up('xxl')] : {
        minWidth: '550px', 
        minHeight: '300px', 
        margin: '0.8em 0.8em'
    }, 

}))

export default Mycard