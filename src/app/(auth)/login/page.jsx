'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const {register, handleSubmit, formState: { errors },} = useForm()
    console.log(errors, "errors")


    const handleLoginFunc =(d)=>{
        console.log(d, "dataaaaaaaa")
       
    }
    
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
                    type="Password" 
                    className="input" 
                    placeholder="Password" 
                    {...register("password", {required: "a error message showinggggg"})}/>
                    {errors.password && <p>{errors.password.message} </p>}
                </fieldset>
                <button className="btn btn-xs w-full bg-slate-900 text-white sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</button>
            </form>
            <p>Dont Have Account? <Link href={`/register`}>Register</Link></p>
           </div>


        </div>
    );
};

export default LoginPage;