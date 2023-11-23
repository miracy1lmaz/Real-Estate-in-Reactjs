import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import "./Resindencies.css"
import data from "../../utils/slider.json"
import { slidersettings } from '../../utils/common'



const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innewWitdh r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>


                <Swiper {...slidersettings}>
                  
                    {
                        data.map((c, i) => (

                            <SwiperSlide key={i}>
                                <div className=" flexColStart r-card">
                                    <img src={c.image} alt="home" />

                                    <span className='secondaryText r-price'>
                                        <span style={{color:"orange"}}> TL </span> <span> {c.price} </span>
                                    </span>

                                    <span className='primaryText'>{c.name}</span>
                                    <span className='secondaryText'>{c.detail}</span>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default Residencies
