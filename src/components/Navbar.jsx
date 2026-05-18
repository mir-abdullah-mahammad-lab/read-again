'use client'
import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';
import { authClient } from "@/lib/auth-client"


const Navbar = () => {
const { data: session, isPending } = authClient.useSession()
const user = session?.user;

// console.log(user.name, "USER--NAME????")



    return (
        <div className='container mx-auto flex flex-row gap-4 justify-between mt-6'>
            
           <ul className='flex justify-between items-center gap-2'>
            <li><Navlink href={'/'}>Home</Navlink></li>
            <li><Navlink href={'/about-us'}>About</Navlink></li>
            <li><Navlink href={'/career'} className={'text-yellow-600'}>Career</Navlink></li>
           </ul>
           { isPending? <span className="loading loading-dots loading-xl"></span> : user ? (<div className='flex items-center gap-2'>
            <h2>{user.name}</h2>
            <Image src={user.image || userAvater } alt='userAvater' height={60} width={60}></Image>
            <button className='btn bg-green-400 text-white' onClick={async ()=>{await authClient.signOut();}}><Link href={'/login'}>Log out</Link></button>
           </div>) : ( <h2> Login</h2>)
           }

        </div>
    );
};

export default Navbar;