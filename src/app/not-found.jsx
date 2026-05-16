import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col'>
            <h2 >This page is not found</h2>
            <Link href={'/'}>
            <button className='btn btn-success text-white'>Home</button></Link>
        </div>
    );
};

export default notFound