import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState

} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import "./Value.css"

import data from '../../utils/accordion'


const Value = () => {

    return (
        <div >
            <section className="v-wrapper">
                <div className="paddings innerWidth flexCenter v-container">
                    <div className="v-left">
                        <div className="image-container">
                            <img src="./value.png" alt="" />
                        </div>
                    </div>

                    <div className="flexColStar v-right" style={{marginTop:"3rem"}}>
                        <span className='orangeText'>Our Value</span>
                        <br />
                        <span className='PrimaryText'>Value We Give to you</span>
                        <br />
                        <span className='secondaryText'>Lorem ipsum dolor sit amet
                            <br /> consectetur
                            adipisicing elit. Ut eum aliquid
                            labore hic eveniet accusamu.
                        </span>
        <br />
        <br />          
        <br />
                        <span className='orangeText'>Our Value</span>
                        <br />
                        <span className='PrimaryText'>Value We Give to you</span>
                        <br />
                        <span className='secondaryText'>Lorem ipsum dolor sit amet
                            <br /> consectetur
                            adipisicing elit. Ut eum aliquid
                            labore hic eveniet accusamu.
                        </span>

                        <br />
        <br />
                        <span className='orangeText'>Our Value</span>
                        <br />
                        <span className='PrimaryText'>Value We Give to you</span>
                        <br />
                        <span className='secondaryText'>Lorem ipsum dolor sit amet
                            <br /> consectetur
                            adipisicing elit. Ut eum aliquid
                            labore hic eveniet accusamu.
                        </span>

                        <br />
                        <br />

                        <span className='orangeText'>Our Value</span>
                        <br />
                        <span className='PrimaryText'>Value We Give to you</span>
                        <br />
                        <span className='secondaryText'>Lorem ipsum dolor sit amet
                            <br /> consectetur
                            adipisicing elit. Ut eum aliquid
                            labore hic eveniet accusamu.
                        </span>



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Value
