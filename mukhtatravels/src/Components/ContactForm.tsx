import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse, startOfDay } from "date-fns";
import Image from "next/image";

type FormValues = {
    name: string;
    email: string;
    phone: string;
    adults: number;
    fromDate: string;
    toDate: string;
};
const ContactForm: React.FC = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset,
    } = useForm<FormValues>();
    const phone = watch("phone");
    const today = new Date();
    const fromDate = watch("fromDate");

    const onSubmit = (data: FormValues) => {
        console.log("Form Submitted:", data);
        reset(); // Reset the form after submission
        // You can send this to an API or show a success message
    };
    const handleDateChange = (date: Date, field: "fromDate" | "toDate") => {
        const formattedDate = format(date, "dd-MM-yyyy");
        setValue(field, formattedDate); // Save formatted date to form state
    };

    return (
        <div className=" flex items-center justify-center gap-4">


            <div className="bg-[url(/MukhtaSolutionsLogo.jpeg)] bg-auto bg-center bg-no-repeat h-[36rem] w-[60rem] rounded-lg items-center justify-center hidden lg:flex">
                {/* <Image
                    src="/MukhtaSolutionsLogo.jpeg" // Path to the image in the public folder
                    alt="Mukhta Solutions Logo"
                    width={560}  // Set the desired width
                    height={460} // Set the desired height // This will ensure the image behaves like "object-fit: cover"
                /> */}
            </div>
            <div className=" p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Book Your Tour</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            className="w-full border px-3 py-2 rounded focus:outline-[green]"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name should be at least 2 characters",
                                },
                            })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full border px-3 py-2 rounded focus:outline-[green]"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Phone */}
                    {/* Phone */}
                    <div>
                        <label className="block mb-1 font-medium">Phone Number</label>
                        <PhoneInput
                            international
                            defaultCountry="IN" // Set default country code, optional
                            value={phone}// To integrate with react-hook-form
                            onChange={(value) => setValue("phone", value || "")}// Save value to react-hook-form
                            className="w-full border px-3 py-2 rounded focus:border-none [&>input]:outline-none 
                            [&>input]:focus:outline-none 
                            [&>input]:focus-visible:outline-none
                            focus-within:border-[green] 
                            focus-within:ring-1 
                            focus-within:ring-[green]"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* Number of Adults */}
                    <div>
                        <label className="block mb-1 font-medium">Number of Adults</label>
                        <input
                            type="number"
                            className="w-full border px-3 py-2 rounded appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-[green]"
                            {...register("adults", {
                                required: "Please enter number of adults",
                                min: {
                                    value: 1,
                                    message: "At least 1 adult is required",
                                },
                            })}
                        />
                        {errors.adults && (
                            <p className="text-red-500 text-sm mt-1">{errors.adults.message}</p>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <div className="">
                            <label className="block mb-1 font-medium">From Date</label>
                            <Controller
                                control={control}
                                name="fromDate"
                                rules={{
                                    required: "Please select a start date",
                                    validate: (value) => {
                                        const date = parse(value, "dd-MM-yyyy", new Date());
                                        const normalizedDate = startOfDay(date); // Normalize parsed date to midnight

                                        console.log({ normalizedDate, today });
                                        return normalizedDate > today || "Start date cannot be in the past";
                                    },
                                }}
                                render={({ field }) => (
                                    <DatePicker
                                        {...field}
                                        selected={field.value ? parse(field.value, "dd-MM-yyyy", new Date()) : null}
                                        onChange={(date) => handleDateChange(date as Date, "fromDate")}
                                        dateFormat="dd-MM-yyyy"
                                        minDate={today}
                                        className="w-full border px-3 py-2 rounded focus:outline-none focus:border-green-500"
                                    />
                                )}
                            />
                            {errors.fromDate && (
                                <p className="text-red-500 text-sm mt-1">{errors.fromDate.message}</p>
                            )}
                        </div>

                        {/* To Date */}
                        <div>
                            <label className="block mb-1 font-medium">To Date</label>
                            <Controller
                                control={control}
                                name="toDate"
                                rules={{
                                    required: "Please select an end date",
                                    validate: (toDate) => {
                                        const from = parse(fromDate, "dd-MM-yyyy", new Date());
                                        const to = parse(toDate, "dd-MM-yyyy", new Date());
                                        return (
                                            to >= from || "End date cannot be before start date"
                                        );
                                    },
                                }}
                                render={({ field }) => (
                                    <DatePicker
                                        {...field}
                                        selected={field.value ? parse(field.value, "dd-MM-yyyy", new Date()) : null}
                                        onChange={(date) => handleDateChange(date as Date, "toDate")}
                                        dateFormat="dd-MM-yyyy"
                                        minDate={fromDate ? parse(fromDate, "dd-MM-yyyy", new Date()) : today}
                                        className="w-full border px-3 py-2 rounded focus:outline-none focus:border-green-500"
                                    />
                                )}
                            />
                            {errors.toDate && (
                                <p className="text-red-500 text-sm mt-1">{errors.toDate.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
export default ContactForm;