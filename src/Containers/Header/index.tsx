import React from 'react'
import { ArrLinks } from '../../Array/header'
import s from "./style.module.scss"
import {ReactComponent as Logo} from "../../img/header/logo.svg"
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.container}>
            <a href="/">
                <div className={s.blockLogo}>
                    <Logo className={s.logo} />
                    <div className={s.text}>Creative</div>
                </div>
            </a> 
                
            <ul className={s.linksList}>
                {ArrLinks.map(({name,url})=>{
                    return <li key={name} className={s.link}>
                        < NavLink  
                        className={({ isActive}) => isActive ? s["active"] : s["pending"]} 
                        to={url||"/"}>{name}</ NavLink>
                        </li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Header