import React from 'react';
import './Home.css'
import img from '../../../img/heroImg.png'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const HeroComponent = () => {
    return (
        <div className='container mx-auto grid grid-cols-7'>
            <div className='col-span-2 flex justify-center'>
                <div className='flex flex-col'>
                    <span className='text-4xl font-bold verticalText mt-4 mb-48' id='tekoFont'>Find out if you can</span>
                    <div className='grid gap-3 text-red-500'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                    </div>

                </div>
                <div>
                    <div className='text-9xl font-bold text-red-700' id='tekoFont'>
                        <p>SU</p>
                        <p className='-my-9'>RVI</p>
                        <p>VE</p>
                    </div>
                    <div>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labor.</p>
                    </div>
                </div>


            </div>
            <div className='col-span-5' id='navbarText'>
                <img src={img} className='w-full h-4/5' alt="" />
            </div>
        </div >
    );
};

export default HeroComponent;