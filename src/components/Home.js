import React from 'react'
import '../App.css'
import {
    Myportfolio,
    MRlogo,
    Hellotext,
    Myname,
    Myskill,
    Myintro,
    Talkbtn,
    Checkout
} from '../styledComponent/Styled.component'
import logo from "../img/mr-logo.jpg"
import { useNavigate } from 'react-router-dom'




const Home = () => {
    const navigate = useNavigate()
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
                            <Hellotext>Hello <span className='iam'>I'am</span></Hellotext>
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
                        <div className='pages'>
                            <h2 onClick={() => navigate('/')}>Home</h2>
                            <h2 onClick={() => navigate('/sevices')}>Services</h2>
                            <h2 onClick={() => navigate('/projects')}>Projects</h2>
                            <h2 onClick={() => navigate('/test')}>Testimonials</h2>
                            <h2 onClick={() => navigate('/portfolio')}>Portfolio</h2>
                        </div>
                    </div>
                    <div className='row social-icon'>
                        <Checkout>Check out my
                            <i className="fa fa-instagram" aria-hidden="true" />
                            <i className="fa fa-globe" aria-hidden="true" />
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </Checkout>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
