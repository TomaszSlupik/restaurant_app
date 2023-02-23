import { useContext, useDebugValue } from 'react'
import LoginContext from '../context/loginContext'

export default function useLogin() {

    const loginContext = useContext (LoginContext)

    const login = loginContext.isLogin;

    useDebugValue(login ? 'zalogowany' : 'wylogowany')

    const setLogin = (isAuthenticated, tokenData= null) => {
        if (isAuthenticated) {
            loginContext.login()
            if (tokenData) {
                window.localStorage.setItem('token', JSON.stringify())
            }
        }
        else {
            loginContext.logout()
            window.localStorage.removeItem('token')
        }   
       
    }

  return [login, setLogin]
}
