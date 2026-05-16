import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';
const Navbar = () => {
    return (
        <div className='container mx-auto flex flex-row gap-4 justify-between mt-6'>
            <div></div>
           <ul className='flex justify-between items-center gap-2'>
            <li><Navlink href={'/'}>Home</Navlink></li>
            <li><Navlink href={'/about-us'}>About</Navlink></li>
            <li><Navlink href={'/career'} className={'text-yellow-600'}>Career</Navlink></li>
           </ul>
           <div className='flex items-center gap-2'>
            <Image src={userAvater} alt='userAvater' height={60} width={60}></Image>
            <button className='btn bg-green-400 text-white'><Link href={'/login'}>Login</Link></button>
           </div>

        </div>
    );
};

export default Navbar;