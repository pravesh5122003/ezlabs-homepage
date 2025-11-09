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
    clearErrors,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setStatusMsg("");
    clearErrors(); // ✅ Clear all validation errors immediately on submit

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
        setStatusMsg("✅ Form Submitted Successfully!");
        toast.success("Form Submitted Successfully!");
        reset(); // ✅ Reset form after success
        clearErrors(); // ✅ Clear any lingering field errors
      } else {
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
      className="flex items-center justify-center min-h-screen 
                 bg-gradient-to-b from-[#fff8f2] via-[#fdf3e6] to-[#fff] 
                 dark:from-[#0F0F0F] dark:via-[#1C1C1C] dark:to-[#000000]
                 transition-colors duration-700 relative overflow-hidden"
    >
      <div className="max-w-4xl w-full mx-auto px-4 relative">
        <Toaster position="top-center" reverseOrder={false} />

        {/* ✨ Cinematic Background Lights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 -left-10 w-80 h-80 bg-[#F59E0B]/30 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.2 }}
          className="absolute -bottom-20 -right-10 w-80 h-80 bg-[#F97316]/25 rounded-full blur-[120px]"
        />

        {/* 🎬 Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white/40 dark:bg-black/50 backdrop-blur-2xl border border-[#F59E0B]/20 
                     shadow-[0_8px_40px_rgba(249,115,22,0.2)] rounded-2xl p-8 md:p-10 space-y-6"
        >
          {/* 🔹 Header */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-6 
                       bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15] 
                       bg-clip-text text-transparent tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get to touch ✨
          </motion.h2>

          {/* 🧾 Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className={`w-full p-3 rounded-lg border text-gray-800 dark:text-gray-100 
                            bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-md
                            focus:ring-2 focus:ring-[#F59E0B] outline-none transition-all duration-300 ${
                              errors.name
                                ? "border-red-500"
                                : "border-[#F59E0B]/30"
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
              <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
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
                placeholder="Enter your email"
                className={`w-full p-3 rounded-lg border text-gray-800 dark:text-gray-100 
                            bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-md
                            focus:ring-2 focus:ring-[#F97316] outline-none transition-all duration-300 ${
                              errors.email
                                ? "border-red-500"
                                : "border-[#F59E0B]/30"
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
              <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                })}
                placeholder="eg.9876543210"
                maxLength={10}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
                className={`w-full p-3 rounded-lg border text-gray-800 dark:text-gray-100 
                            bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-md
                            focus:ring-2 focus:ring-[#F97316] outline-none transition-all duration-300 ${
                              errors.phone
                                ? "border-red-500"
                                : "border-[#F59E0B]/30"
                            }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Tell us about your idea, project, or collaboration..."
                className={`w-full p-3 h-32 rounded-lg border text-gray-800 dark:text-gray-100 
                            bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-md
                            focus:ring-2 focus:ring-[#F59E0B] outline-none resize-none transition-all duration-300 ${
                              errors.message
                                ? "border-red-500"
                                : "border-[#F59E0B]/30"
                            }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          {/* 🚀 Buttons */}
          <div className="flex gap-4 justify-center pt-2">
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.05 } : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
              className={`min-w-[130px] px-6 py-3 rounded-xl text-white font-semibold 
                          bg-gradient-to-r from-[#F97316] to-[#F59E0B] shadow-[0_8px_25px_rgba(249,115,22,0.35)]
                          hover:shadow-[0_10px_30px_rgba(249,115,22,0.45)] transition-all duration-300 ${
                            loading
                              ? "bg-gray-400 cursor-not-allowed shadow-none"
                              : "dark:from-[#F97316] dark:to-[#F59E0B]"
                          }`}
            >
              {loading ? "Submitting..." : "Send Message"}
            </motion.button>

            <motion.button
              type="button"
              onClick={() => {
                reset();
                setStatusMsg("");
                clearErrors();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="min-w-[130px] px-6 py-3 rounded-xl font-semibold border-2 border-[#F59E0B] 
                         text-[#F59E0B] hover:bg-[#F59E0B]/10 
                         dark:hover:bg-[#F59E0B]/20 transition-all duration-300"
            >
              Reset
            </motion.button>
          </div>

          {/* 💚 Status Message */}
          {statusMsg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center text-[#16A34A] dark:text-[#22C55E] font-semibold text-lg"
            >
              {statusMsg}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

