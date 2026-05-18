'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const RightSideBar =  () => {

    const handleGoogleSignIn = async () =>{
          const data = await authClient.signIn.social({provider: "google"})
    }

    const handleGithubSignIn = async () =>{
     const data = await authClient.signIn.social({provider: "github"})
}
    
    return (
        <div className='flex flex-col gap-2'>
            <h2>Login with</h2>
            <button className='btn btn-accent' onClick={handleGoogleSignIn}>Login with google</button>
            <button className='btn btn-accent'onClick={handleGithubSignIn}>Login with github</button>

        </div>
    );
};

export default RightSideBar;