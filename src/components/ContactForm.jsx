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
      className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-white 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black 
                 overflow-hidden transition-colors duration-700"
    >
      <div className="max-w-5xl mx-auto px-6 relative">
        <Toaster position="top-center" reverseOrder={false} />

        {/* 🔵 Floating Background Lights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-32 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.8 }}
          className="absolute -bottom-32 -right-20 w-96 h-96 bg-indigo-400/25 rounded-full blur-[100px]"
        />

        {/* ✨ Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 
                     bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                     bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
           Collaborate Us 🫂
        </motion.h2>

        {/* 🧊 Contact Form Card */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white/30 dark:bg-gray-900/60 backdrop-blur-lg border border-white/40 
                     shadow-[0_10px_50px_rgba(30,64,175,0.15)] dark:shadow-[0_10px_50px_rgba(255,255,255,0.05)]
                     rounded-3xl p-10 sm:p-12 space-y-8 relative z-10 max-w-2xl mx-auto transition-all duration-700"
        >
          {/* 🧾 Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="John Doe"
              className={`w-full p-4 rounded-xl border bg-white/70 dark:bg-gray-800/80 
                         focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 
                         ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700 dark:text-gray-100"}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* ✉️ Email */}
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
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
              className={`w-full p-4 rounded-xl border bg-white/70 dark:bg-gray-800/80 
                         focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 
                         ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700 dark:text-gray-100"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* 📞 Phone */}
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
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
              placeholder="9876543210"
              maxLength={10}
              className={`w-full p-4 rounded-xl border bg-white/70 dark:bg-gray-800/80 
                         focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 
                         ${errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-700 dark:text-gray-100"}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* 💬 Message */}
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Tell us about your project..."
              className={`w-full p-4 h-36 rounded-xl border bg-white/70 dark:bg-gray-800/80 
                         focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-all duration-300 
                         ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700 dark:text-gray-100"}`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* 🚀 Buttons */}
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { y: -3, scale: 1.05 } : {}}
              whileTap={!loading ? { y: 0, scale: 0.98 } : {}}
              className={`min-w-[130px] px-8 py-3 rounded-xl text-white font-semibold 
                          bg-gradient-to-r from-blue-600 to-indigo-600 
                          shadow-[0_10px_25px_rgba(79,70,229,0.35)]
                          hover:shadow-[0_15px_30px_rgba(79,70,229,0.45)]
                          transition-all duration-300
                          ${
                            loading
                              ? "bg-gray-400 cursor-not-allowed shadow-none"
                              : "dark:from-blue-500 dark:to-indigo-500"
                          }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>

            {/* Reset */}
            <motion.button
  type="button"
  disabled={loading}
  whileHover={!loading ? { y: -3, scale: 1.05 } : {}}
  whileTap={!loading ? { y: 0, scale: 0.98 } : {}}
  onClick={() => {
    reset();
    setStatusMsg("");
  }}
  className={`min-w-[130px] px-8 py-3 rounded-xl font-semibold border-2 transition-all duration-300 ${
    loading
      ? "opacity-50 cursor-not-allowed border-gray-400 text-gray-400"
      : "border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white"
  }`}
>
  Reset
</motion.button>

          </div>

          {/* 💚 Status message */}
          {statusMsg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-6 text-center text-green-600 dark:text-green-400 font-semibold text-lg"
            >
              {statusMsg}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
