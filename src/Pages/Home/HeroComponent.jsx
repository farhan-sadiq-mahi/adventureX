import React from 'react';
import img from '../../../img/heroImg.png'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const HeroComponent = () => {
    return (
        <div className='grid grid-flow-row md:grid-cols-7 '>
            <div className='col-span-2 flex justify-center flex-col-reverse md:flex-row'>
                <div className='flex flex-col '>
                    <span className='text-4xl font-bold verticalText mt-4 mb-48' id='tekoFont'>Find out if you can</span>
                    <div className='grid gap-3 text-red-500 hidden md:block'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>
                <div>
                    <div className='text-9xl font-bold text-red-700' id='tekoFont'>
                        <span className='hidden md:block'>
                            <p>SU</p>
                            <p className='-my-9'>RVI</p>
                            <p>VE</p>
                        </span>
                        <span className='md:hidden'>
                            SURVIVE
                        </span>
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