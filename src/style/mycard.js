import {styled} from '@mui/system';


const Mycard = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        Width: '345px',  
        marginTop: '0.8em'
    }, 
    [theme.breakpoints.up('sm')] : {
        Width: '345px', 
        minHeight: '300px', 
        marginTop: '0.8em'
    }, 
    [theme.breakpoints.up('md')] : {
        Width: '345px', 
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