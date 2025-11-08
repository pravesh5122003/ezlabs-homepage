import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "framer-motion";

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
        data
      );

      if (response.status === 200 || response.status === 201) {
        setStatusMsg("✅ Form Submitted Successfully!");
        reset();
      } else {
        setStatusMsg("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatusMsg("❌ Failed to submit. Please check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-orange-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch ✉️
        </motion.h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-xl p-8 space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="yourname@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone is required" })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 h-28 resize-none focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2.5 rounded-lg text-white font-medium transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-600 hover:bg-orange-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            <button
              type="button"
              onClick={() => {
                reset();
                setStatusMsg("");
              }}
              className="px-6 py-2.5 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50"
            >
              Reset
            </button>
          </div>

          {/* Status message */}
          {statusMsg && (
            <p className="mt-4 text-center text-green-600 font-medium">
              {statusMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
