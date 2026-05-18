'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const {register, handleSubmit, formState: { errors },} = useForm()
    console.log(errors, "errors")


    const handleLoginFunc = async (d)=>{
        // console.log(d, "dataaaaaaaa")
        const {email, password } = d

        const { data, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",});


       
    }

    const [isShowPass, setIsShowPass] = useState(true)
    
    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
           <div className="p-4 rounded-xl bg-white">
            <h2 className="font-bold text-3xl text-center">Login Your Account</h2> 
            
            <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input 
                    type="email" 
                    className="input" 
                    placeholder="Email"
                    {...register("email")} />
                   
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input 
                    type={isShowPass ? "text":"Password"}
                    className="input" 
                    placeholder="Password" 
                    {...register("password", {required: "a error message showinggggg"})}/>
                    {errors.password && <p>{errors.password.message} </p>}
                    <button 
                    onClick={()=>{setIsShowPass(!isShowPass);
                        
                     }}
                    className="btn btn-sm bg-slate-400">{isShowPass ?  "Dont Show":"show"}</button>
                </fieldset>
                <button className="btn btn-xs w-full bg-slate-900 text-white sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</button>
            </form>
            <p>Dont Have Account? <Link href={`/register`}>Register</Link></p>
           </div>


        </div>
    );
};

export default LoginPage;