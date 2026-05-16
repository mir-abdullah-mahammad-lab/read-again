import React from 'react';

const RightSideBar = () => {
    return (
        <div className='flex flex-col gap-2'>
            <h2>Login with</h2>
            <button className='btn btn-accent'>Login with google</button>
            <button className='btn btn-accent'>Login with github</button>

        </div>
    );
};

export default RightSideBar;