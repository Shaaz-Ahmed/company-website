import React from 'react';
import './index.css';
import web from '../src/images/about.png';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row' id=''>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' id='five'>
                                    <h1 id='two'>Welcome to About Page  <strong id='one'>Service Guru!</strong></h1>
                                    <h5 className='my-2' >

                                        We are the team of talented developers making websites
                                    </h5>
                                    <div className='mt-3'>
                                        <NavLink to='/contact' className='btn1' id=''>Contact Now</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={web} className='img-fluid animated' alt='home img'  id='five'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
