import React from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'

export default function Header() {
  return (
    <div>
        <div className="header">
            <div className="header__nav">
              <Nav />
            </div>
            <div className="header__box">
                <div className="header__box-shadow">
                    <div className="header__box-shadow--header">
                      Zgłodniałeś?
                      <div className="header__box-shadow--header---text">
                        Zapraszamy do zapoznania się z naszą ofertą
                      </div>
                    </div>
                </div>
                <img className="header__box" src={process.env.PUBLIC_URL + window.innerWidth < 576 ? '/img/headermini.jpg' : '/img/headermax.jpg'} alt="Restauracja - widok" />
            </div>   
        </div>
    </div>
  )
}
