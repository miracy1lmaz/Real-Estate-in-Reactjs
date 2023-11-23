import "./footer.css"
import React from 'react'



const footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left  */}
                <div className="flexColStart f-left">

                    <img src="public/logo2.png" width={120} alt="" />
                    <span className="secondaryText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                </div>
                {/* right */}

                <div className="flexColStart f-right">
                    <span className="primaryText">İnformation</span>
                    <span className="secondaryText">999 LA-USA</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>About</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default footer
