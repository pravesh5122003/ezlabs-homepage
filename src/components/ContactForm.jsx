
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setStatusMsg("");

    try {
      const response = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("✅ Form submitted successfully:", response.data);
        setStatusMsg("✅ Form Submitted Successfully!");
        toast.success("Form Submitted Successfully!");
        reset();
      } else {
        console.log("⚠️ Unexpected response:", response);
        setStatusMsg("⚠️ Something went wrong. Please try again.");
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Submission Error:", error);
      setStatusMsg("❌ Failed to submit. Please check console for details.");
      toast.error("Error submitting form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 overflow-hidden transition-colors duration-700 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"

    >
      {/* ⬆️ little wider than earlier */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* Toast notifications */}
        <Toaster position="top-center" reverseOrder={false} />

        {/* Background accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-20 -right-16 w-80 h-80 bg-gradient-to-tr from-orange-300/30 to-yellow-100/30 rounded-full blur-3xl hidden md:block"
        ></motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-12 relative z-10 transition-colors duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Let’s Build Something Great ✉️
        </motion.h2>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl dark:shadow-[0_8px_30px_rgba(255,255,255,0.08)] rounded-2xl p-6 sm:p-8 space-y-6 relative z-10 max-w-2xl mx-auto transition-all duration-700"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1 transition-colors duration-500">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className={`mt-1 w-full rounded-lg border p-3 transition-all duration-300 focus:ring-2 focus:ring-orange-400 outline-none ${
                errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="yourname@example.com"
              className={`mt-1 w-full rounded-lg border p-3 transition-all duration-300 focus:ring-2 focus:ring-orange-400 outline-none ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit number",
                },
              })}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              placeholder="Enter your phone number"
              className={`mt-1 w-full rounded-lg border p-3 transition-all duration-300 focus:ring-2 focus:ring-orange-400 outline-none ${
                errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              }`}
              maxLength={10}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Write your message here..."
              className={`mt-1 w-full rounded-lg border p-3 h-32 resize-none transition-all duration-300 focus:ring-2 focus:ring-orange-400 outline-none ${
                errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4 justify-center md:justify-start">
            {/* Submit */}
            <motion.button
  type="submit"
  disabled={loading}
  whileHover={!loading ? { y: -2 } : {}}
  whileTap={!loading ? { y: 0 } : {}}
  className={`min-w-[130px] px-6 py-3 rounded-xl text-white font-medium transition-all duration-300
    shadow-[0_10px_25px_rgba(249,115,22,0.35)]
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed shadow-none"
        : "bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 dark:shadow-[0_10px_25px_rgba(255,255,255,0.08)]"
    }`}
>
  {loading ? "Submitting..." : "Submit"}
</motion.button>

            {/* Reset */}
            <motion.button
  type="button"
  disabled={loading}
  whileHover={!loading ? { y: -2 } : {}}
  whileTap={!loading ? { y: 0 } : {}}
  onClick={() => {
    reset();
    setStatusMsg("");
  }}
  className={`min-w-[130px] px-6 py-3 rounded-xl font-medium border transition-all duration-300
    ${
      loading
        ? "opacity-50 cursor-not-allowed border-gray-300 text-gray-400"
        : "border-orange-600 text-orange-600 bg-white hover:bg-orange-50 shadow-[0_10px_25px_rgba(249,115,22,0.15)] dark:border-orange-400 dark:text-orange-400 dark:bg-gray-900 dark:hover:bg-orange-400 dark:hover:text-white dark:shadow-[0_10px_25px_rgba(255,255,255,0.08)]"
    }`}
>
  Reset
</motion.button>


          </div>

          {/* Status message */}
          {statusMsg && (
            <p className="mt-6 text-center text-green-600 dark:text-green-400 font-semibold text-lg transition-colors duration-500">
              {statusMsg}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
