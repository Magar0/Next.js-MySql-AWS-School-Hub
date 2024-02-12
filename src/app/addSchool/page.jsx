'use client'
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


const AddSchool = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const addSchool = async (data) => {
        try {
            const response = await axios.post('/api/schools', data)
            // console.log(response);
        } catch (err) {
            if (err.response.data.message) {
                console.log("Error: ", err.response.data.message);
            } else
                console.log("Error adding school");
        }
    }

    console.log(errors);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <form onSubmit={handleSubmit((data) => addSchool(data))} className="flex flex-col gap-5 w-3/5 border border-slate-400 rounded-lg py-10 px-20 ">
                <h3 className="text-2xl font-bold tracking-widest">School  Details</h3>
                <div className="flex flex-col mb-3">
                    <label htmlFor="name">Name : </label>
                    <input className="py-1 px-3 border border-slate-400 rounded-lg" id="name" type="text" {...register("name", { required: "Please type your name" })} placeholder="Type your Name" />
                    <p className="text-red-500 ">{errors.name?.message}</p>
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="email">Email : </label>
                    <input className="py-1 px-3 border border-slate-400 rounded-lg" id="email" type="email" {...register("email_id", { required: "Please type valid Email ID" })} placeholder="your email id" />
                    <p className="text-red-500 ">{errors.email_id?.message}</p>
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="contact">Contact : </label>
                    <input className="py-1 px-3 border border-slate-400 rounded-lg" id="contact" type="tel" {...register("contact", { pattern: /^[0-9]+$/ })} placeholder="Contact number" />
                    {errors.contact && <p className="text-red-500 ">Please type a valid contact number</p>}
                </div>

                <div className="flex flex-col mb-3">
                    <label htmlFor="state">State : </label>
                    <input className="py-1 px-3 border border-slate-400 rounded-lg" id="state" type="text" {...register("state", { required: "State is required." })} placeholder="State name" />
                    <p className="text-red-500 ">{errors.state?.message}</p>
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="city">City : </label>
                    <input className="py-1 px-3 border border-slate-400 rounded-lg" id="city" type="text" {...register("city", { required: "City is required." })} placeholder="City name" />
                    <p className="text-red-500 ">{errors.city?.message}</p>
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="address">Address : </label>
                    <input className="py-1 px-3 border border-slate-400 rounded-lg" id="address" type="text" {...register("address")} placeholder="Type your Address" />
                </div>
                {errors.root && <p className="text-red-500">Error adding school</p>}
                <button type="submit" className="cursor-pointer p-4 font-bold bg-slate-400 w-1/2 mx-auto transition-all delay-150 rounded-md hover:bg-slate-600 hover:text-white" disabled={isSubmitting} >{isSubmitting ? "Submitting..." : "Submit"}</button>
            </form>
        </main>
    );
}

export default AddSchool;