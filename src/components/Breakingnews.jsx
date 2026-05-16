import React from 'react';
import Marquee from 'react-fast-marquee';

const Breakingnews = () => {
    return (
        <div className='flex justify-between items-center gap-4 bg-gray-200 p-4 container mx-auto'>
           <button className='bg-red-500 btn btn-pink-500'>Latest News</button>
             <Marquee pauseOnHover={true} speed={10}>
                Sadia and Manha both are playfull but sadia is humty dumpty
            </Marquee>
        </div>
    );
};

export default Breakingnews;