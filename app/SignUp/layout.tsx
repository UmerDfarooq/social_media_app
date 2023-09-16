"use client";
import { motion } from "framer-motion";

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-5  bg-blue-300 min-h-full dark:bg-blue-950 ">
      <div className="col-span-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-24 bg-white shadow-xl border rounded-lg max-h-full m-10 dark:bg-slate-700"
        >
          {children}
        </motion.div>
      </div>
      <div className="col-span-2">
        <h1>Content side</h1>
      </div>
    </div>
  );
}
