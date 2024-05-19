"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const Stairtransition = () => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <div className="h-screen w-screen fixed top-0 right-0 left-0 pointer-events-none z-50 flex">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Stairtransition;
