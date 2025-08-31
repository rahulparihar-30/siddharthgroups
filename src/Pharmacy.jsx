import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react"; // optional icon

const Pharmacy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 text-center px-6">
      {/* Animated pill / gif */}
      <motion.img
        src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" // you can replace with pharmacy/pill gif
        alt="Coming Soon"
        className="w-32 h-32 mb-6"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Coming Soon Text */}
      <motion.h1
        className="text-5xl font-extrabold text-blue-900 drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Pharmacy Services
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-600 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        🚧 We’re preparing something amazing for you. Stay tuned!
      </motion.p>

      {/* Animated Loader */}
      <motion.div
        className="flex items-center gap-2 mt-6 text-blue-700 font-medium"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>Launching Soon...</span>
      </motion.div>

      {/* Button with hover animation */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 transition"
      >
        Notify Me
      </motion.button>
    </div>
  );
};

export default Pharmacy;
