import React from 'react'
import '../App.css'
import {
    Myportfolio,
    MRlogo,
    Hellotext,
    Myname,
    Myskill,
    Myintro,
    Talkbtn
} from '../styledComponent/Styled.component'
import logo from "../img/mr-logo.jpg"
const Home = () => {
    return (
        <>
            <div className='myhome'>
                <div className='row'>
                    <div className='col'>
                        <div>
                            <MRlogo src={logo} alt="MR Logo" />
                            <Myportfolio className='portfolio'>Portfolio</Myportfolio>
                        </div>
                        <div>
                            <Hellotext>Hello <span>I'am</span></Hellotext>
                        </div>
                        <div>
                            <Myname>Moin Rangrej</Myname>
                            <Myskill>
                                Web Developer and Graphics Designer
                            </Myskill>
                            <Myintro>
                                In soluta blanditiis est libero error eum voluptas nihil. Ut animi nihil et magnam odit
                                sed repellat necessitatibus aut nostrum perspiciatis At optio exercitationem sed nesciunt quasi. 
                                Et totam quis vel tempore error sit debitis distinctio.
                            </Myintro>
                        </div>
                        <div>
                            <Talkbtn>Let's talk</Talkbtn>
                        </div>
                    </div>
                    <div className='col'>
                        2 to 3
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
