import React from 'react';

const States = ({ inProgress, resolvedTotal }) => {
    return (
        <div className='px-4 pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#E9E9E9]'>
            <div className='bg-cyan-700 p-4 py-15 rounded-md text-center'
                style={{
                    backgroundImage: 'linear-gradient(#632EE3, #9F62F2), url(https://i.ibb.co/kVDgXTz/ri-calendar-line.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                <p>In-Progress</p>
                <p className='font-bold text-4xl'>{inProgress}</p>
            </div>
            <div className='bg-emerald-500 p-4 py-15 rounded-md text-center'
                style={{
                    background: 'linear-gradient(#54CF68, #00827A)'
                }}>
                <p>Resolved</p>
                <p className='font-bold text-4xl'>{resolvedTotal}</p>
            </div>
        </div>
    );
};

export default States;