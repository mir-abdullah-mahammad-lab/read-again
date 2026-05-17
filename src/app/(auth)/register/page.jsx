
'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    console.log(errors, "errors")


    const handleLoginFunc = async(d)=>{
        console.log(d, "dataaaaaaaa")
        const {name, email,password ,photo,} = d

        const { data , error} = await authClient.signUp.email({
    name: name,
    email: email,
    password: password,
    image: photo,
    callbackURL: "/",});

    if(error){
        alert("ERROR---- TRY AGAIN")
    }

    if(data){
        alert("Sign-Up sucessfull")
    }
       
    }
    
    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
           <div className="p-4 rounded-xl bg-white">
            <h2 className="font-bold text-3xl text-center">Resister Your Account</h2> 
            
            <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input 
                    type="text" 
                    className="input" 
                    placeholder="Name "
                    {...register("name", { require:"Name field is required"})} />
                    {errors.name && <p>{errors.name.message} </p>}
                   
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo URL</legend>
                    <input 
                    type="text" 
                    className="input" 
                    placeholder="Upload Photo"
                    {...register("photo", {required:"Photo URL is required"})} />
                    {errors.photo && <p>{errors.photo.message} </p>}
                   
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input 
                    type="email" 
                    className="input" 
                    placeholder="Email"
                    {...register("email", {required:"eNTER EMAIL ADDRESS"})} />
                    {errors.email && <p>{errors.email.message} </p>}
                   
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
                <button className="btn btn-xs w-full bg-slate-900 text-white sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Register</button>
            </form>
            
           </div>


        </div>
    );
};

export default RegisterPage;