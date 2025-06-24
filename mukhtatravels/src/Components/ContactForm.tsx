"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse, startOfDay } from "date-fns";
import { useTranslations } from "next-intl";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  adults: number;
  fromDate: string;
  toDate: string;
};
const ContactForm: React.FC = () => {
  const t = useTranslations();
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
    <section className="py-14 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50 overflow-x-none ">
      <div className=" flex items-center justify-center gap-4">
        <div className="bg-[url(/MukhtaSolutionsLogo.jpeg)] bg-auto bg-center bg-no-repeat h-[36rem] w-[60rem] rounded-lg items-center justify-center hidden lg:flex">
        </div>
        <div className=" p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#00a73e]">
            {t("Book Your Tour")}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">{t("Name")}</label>
              <input
                type="text"
                placeholder={t("Enter your name")}
                className="w-full border px-3 py-2 rounded focus:outline-[green]"
                {...register("name", {
                  required: t("Name is required"),
                  minLength: {
                    value: 2,
                    message: t("Name should be at least 2 characters"),
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">{t("Email")}</label>
              <input
                type="email"
                placeholder={t("Enter your email")}
                className="w-full border px-3 py-2 rounded focus:outline-[green]"
                {...register("email", {
                  required: t("Email is required"),
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: t("Invalid email format"),
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">{t("Phone Number")}</label>
              <PhoneInput
                international
                defaultCountry="IN"
                value={phone}
                onChange={(value) => setValue("phone", value || "")}
                placeholder={t("Enter your phone number")}
                className="w-full border px-3 py-2 rounded focus:border-none [&>input]:outline-none [&>input]:focus:outline-none [&>input]:focus-visible:outline-none focus-within:border-[green] focus-within:ring-1 focus-within:ring-[green]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">{t("Number of Persons")}</label>
              <input
                type="number"
                placeholder={t("Enter number of persons")}
                className="w-full border px-3 py-2 rounded appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-[green]"
                {...register("adults", {
                  required: t("Please enter number of adults"),
                  min: {
                    value: 1,
                    message: t("At least 1 person is required"),
                  },
                })}
              />
              {errors.adults && (
                <p className="text-red-500 text-sm mt-1">{errors.adults.message}</p>
              )}
            </div>

            <div className="flex gap-4">
              <div>
                <label className="block mb-1 font-medium">{t("From Date")}</label>
                <Controller
                  control={control}
                  name="fromDate"
                  rules={{
                    required: t("Please select a start date"),
                    validate: (value) => {
                      const date = parse(value, "dd-MM-yyyy", new Date());
                      const normalizedDate = startOfDay(date);
                      return (
                        normalizedDate > today || t("Start date cannot be in the past")
                      );
                    },
                  }}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      selected={field.value ? parse(field.value, "dd-MM-yyyy", new Date()) : null}
                      onChange={(date) => handleDateChange(date as Date, "fromDate")}
                      dateFormat="dd-MM-yyyy"
                      minDate={today}
                      placeholderText={t("Select start date")}
                      className="w-full border px-3 py-2 rounded focus:focus:outline-[green]"
                    />
                  )}
                />
                {errors.fromDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.fromDate.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">{t("To Date")}</label>
                <Controller
                  control={control}
                  name="toDate"
                  rules={{
                    required: t("Please select an end date"),
                    validate: (toDate) => {
                      const from = parse(fromDate, "dd-MM-yyyy", new Date());
                      const to = parse(toDate, "dd-MM-yyyy", new Date());
                      return to >= from || t("End date cannot be before start date");
                    },
                  }}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      selected={field.value ? parse(field.value, "dd-MM-yyyy", new Date()) : null}
                      onChange={(date) => handleDateChange(date as Date, "toDate")}
                      dateFormat="dd-MM-yyyy"
                      minDate={fromDate ? parse(fromDate, "dd-MM-yyyy", new Date()) : today}
                      placeholderText={t("Select end date")}
                      className="w-full border px-3 py-2 rounded focus:outline-[green]"
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
              className="w-full bg-[#2c7dff] text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              {t("Submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
