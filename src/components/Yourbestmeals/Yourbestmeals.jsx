import React from 'react'
import useLogin from '../../hooks/useLogin'


export default function Yourbestmeals(props) {

    const [login] = useLogin()
   

  return (
    <div>
        {
            login ? 
            <div>Ostatnio kupiłeś: 
                <input 
                type="text"
                onChange={e => props.setStorage (e.target.value)}
                value={props.storage}
                />
            </div> : null
        }
    </div>
  )
}

