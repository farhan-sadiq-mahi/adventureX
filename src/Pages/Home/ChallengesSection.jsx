import React from 'react';
import img01 from '../../../img/img01.png'
import img02 from '../../../img/img02.png'
import img03 from '../../../img/img03.png'
import { ImCross } from 'react-icons/im'

const ChallengesSection = () => {
    return (
        <div className='h-96 grid grid-cols-8'>
            <div className='col-span-5'>
                <h1 className='text-5xl' id='tekoFont'>Popular challenges</h1>
                <div className="card card-side bg-base-100 my-5">
                    <img src={img01} alt="challenge" className='w-1/2' />
                    <div className="card-body">
                        <h1 className='text-red-600' id='tekoFont'>KEY SKILLS</h1>
                        <h2 className="text-3xl" id='tekoFont'>Friction-Based Fire Making
                        </h2>
                        <p className='text-gray-700'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                            quam nihil molestiae consequatur, vel illum qui dolorem.
                        </p>
                        <p className='' id='tekoFont'> <ImCross className='inline mr-1 text-red-600' /> FIND OUT MORE</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 my-5">
                    <img src={img02} alt="challenge" className='w-1/2' />
                    <div className="card-body">
                        <h1 className='text-red-600' id='tekoFont'>KEY SKILLS</h1>
                        <h2 className="text-3xl" id='tekoFont'>Friction-Based Fire Making
                        </h2>
                        <p className='text-gray-700'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                            quam nihil molestiae consequatur, vel illum qui dolorem.
                        </p>
                        <p className='' id='tekoFont'> <ImCross className='inline mr-1 text-red-600' /> FIND OUT MORE</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 my-5">
                    <img src={img03} alt="challenge" className='w-1/2' />
                    <div className="card-body">
                        <h1 className='text-red-600' id='tekoFont'>KEY SKILLS</h1>
                        <h2 className="text-3xl" id='tekoFont'>Friction-Based Fire Making
                        </h2>
                        <p className='text-gray-700'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                            quam nihil molestiae consequatur, vel illum qui dolorem.
                        </p>
                        <p className='' id='tekoFont'> <ImCross className='inline mr-1 text-red-600' /> FIND OUT MORE</p>
                    </div>
                </div>
            </div>
            <div className='col-span-3 bg-red-600'>

            </div>
        </div>
    );
};

export default ChallengesSection;