import React from 'react'
import s from "./style.module.scss"
import Logo from "../../img/Footer/Logo.png"



const Footer = () => {
  return (
    <div className={s.wrapper}>
     <div className={s.logo}>
      <img src={Logo} alt="" />
     </div>
    </div>
  )
}

export default Footer