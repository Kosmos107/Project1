import React from 'react'

import s from "./style.module.scss"
import bg from "../../../img/content/Women.png"
import {ReactComponent as Left} from "../../../img/arrow/left.svg"
import {ReactComponent as Rigth} from "../../../img/arrow/rigth.svg"



const Home = () => {
  return (
    <div className={s.wrapper} style={{backgroundImage:`url(${bg})`}}>
        <div className={s.conteiner}>
          <div className={s.inner}>
            <div className={s.arrow} >
            <Left />
            </div>
            <div className={s.content}>
              <h1><span>Why</span> creativeti</h1>
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia unde, dolorum iure aliquid id officia repellendus voluptatibus incidunt veritatis. Sit nemo animi magnam velit laudantium quaerat voluptates minus ducimus nostrum!.</p>
              <div className={s.btns}>
                <button>Features</button>
                <button>Free Psd</button>
              </div>
            </div>
            <div className={s.arrow} >
              <Rigth />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home