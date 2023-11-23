import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
    return (
        <div>
            <section className="c-wrapper">

                <div className="paddings innerWidth flexCenter c-container">


                    {

                    }

                    <div className=" flexColStart c-left">
                        <span className='orangeText'>Our Contact</span>
                        <span className='primaryText'>Easy to Contact Us</span>
                        <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corrupti, at animi, consectetur tenetur illo consequatur totam debitis minus ea, quia fugiat possimus enim. Et culpa delectus molestiae magnam officia? </span>



                        <div className="flexColStart contactModes">
                            <div className="flexColStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        
                                    <MdCall size={20} />
                                        
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call <br /> </span>
                                            <span className='secondaryText'>11111111111</span>
                                    </div>
                                </div>

                                <div className="flexCenter button">
                                    Call Now
                                </div>

                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        
                                    <BsFillChatDotsFill size={25} />
                                        
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat <br /> </span>
                                            <span className='secondaryText'>11111111111</span>
                                    </div>
                                </div>

                        
                                <div className="flexCenter button">
                                    Chat Now
                                </div>


                            </div>
                        </div>

                    </div>


                    <div className="c-right">
                        <img src="./contact.jpg" alt="" />
                    </div>

                </div>


            </section>





        </div>
    )
}

export default Contact
