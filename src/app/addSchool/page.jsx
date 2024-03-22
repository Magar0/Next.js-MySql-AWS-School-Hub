'use client'
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";


const AddSchool = () => {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState(null);
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0])
    }
    const addSchool = async (data) => {
        if (selectedImage && !selectedImage.type.startsWith('image/')) {
            alert('Please select an image file.');
            return;
        }
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('city', data.city);
            formData.append('state', data.state);
            formData.append('contact', data.contact);
            formData.append('email_id', data.email_id);
            if (data.address) {
                formData.append('address', data.address);
            }
            if (selectedImage) {
                formData.append('image', selectedImage);
            }

            await axios.post('/api/schools', formData)

            alert("school added successfully");
            router.refresh()
            router.push('/')

        } catch (err) {
            console.log(err.response.data.message);
            if (err.response?.data?.message) {
                setError('root', { message: err.response?.data?.message })
            } else {
                console.log("Error adding school");
                setError('root', { message: "Error adding school. Try again .. " })
            }
        }
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <form onSubmit={handleSubmit((data) => addSchool(data))} className="flex flex-col gap-5 w-3/5 border border-slate-400 rounded-lg py-10 px-20 ">
                <h3 className="text-2xl font-bold tracking-widest">School  Details</h3>

                <div className="flex flex-col mb-3">
                    <label htmlFor="image">Image : </label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
                    {selectedImage &&
                        <>
                            <div className="flex g-10">
                                <Image src={URL.createObjectURL(selectedImage)} alt="Preview" className="preview-image" height={100} width={100} />
                                <RxCross2 className="float-right cursor-pointer" color="red" onClick={() => setSelectedImage(null)} />
                            </div>
                            <p className="text-red-500">{errors.image?.message}</p>
                        </>
                    }
                </div>
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
                {errors.root && <p className="text-red-500">{errors.root?.message}</p>}
                <button type="submit" className="cursor-pointer p-4 font-bold bg-slate-400 w-1/2 mx-auto transition-all delay-150 rounded-md hover:bg-slate-600 hover:text-white" disabled={isSubmitting} >{isSubmitting ? "Submitting..." : "Submit"}</button>
            </form>
        </main>
    );
}

export default AddSchool;