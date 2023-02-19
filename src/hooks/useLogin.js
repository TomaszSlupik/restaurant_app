import { useContext, useDebugValue } from 'react'
import LoginContext from '../context/loginContext'

export default function useLogin() {

    const loginContext = useContext (LoginContext)

    const login = loginContext.isLogin;

    useDebugValue(login ? 'zalogowany' : 'wylogowany')

    const setLogin = (value) => {
        if (value) {
            loginContext.login()
        }
        else {
            loginContext.logout()
        }   
    }

  return [login, setLogin]
}
