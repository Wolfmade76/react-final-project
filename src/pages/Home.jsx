import React from 'react'
import movieImg1 from "../assets/horror.png"
import movieImg2 from "../assets/comedy.png"
import movieImg3 from "../assets/action.png"
import movieImg4 from "../assets/romance.png"
import movieImg5 from "../assets/drana'.png"
import movieImg6 from "../assets/western.png"
export default function Home() {
  return (
    <section id='home'>
      <div className="container">
        <div className="row">
          <div className="genre__img--container">
            <div className="genre__img--wrapper">
              <img src={movieImg1} alt=""  className='genre__img'/>
              <img src={movieImg2} alt="" className='genre__img'/>
              <img src={movieImg3} alt="" className='genre__img' />
              <img src={movieImg4} alt="" className='genre__img' />
              <img src={movieImg5} alt="" className='genre__img' />
              <img src={movieImg6} alt="" className='genre__img' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
