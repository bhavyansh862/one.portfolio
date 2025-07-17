import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';          

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#0d0d0d] flex items-center justify-center z-50">
      <div className="font-mono text-[#ff0000] text-2xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {"> Bhavyansh Lakhara Portfolio".split("").map((char, i) => (
            <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
              {char}
            </motion.span>
          ))}
        </motion.div>
        {/* Blinking bar */}
        <motion.div
          className="w-3 h-6 bg-[#ff0000] inline-block ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;