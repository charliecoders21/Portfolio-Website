"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const ServicesStuff = [
  {
    num: "01",
    href: "/",
    title: "Web Development",
    description:
      "Web development is the act of building, creating and maintaining websites. The field encompasses a broad range of tasks including everything from coding, to technical design, to the performance of a website or application running on the internet",
  },
  {
    num: "02",
    href: "/",
    title: "UI/UX Design",
    description:
      "UX (User Experience) design deals with how users interact with the system. Logical navigation and how smooth and intuitive the experience is all fall under UX design. In short, this type of design helps users have a positive experience",
  },
  {
    num: "03",
    href: "/",
    title: "Logo Design",
    description:
      "Designing a logo involves several key components and considerations to ensure it effectively represents the brand's identity and resonates with its target audience",
  },
  {
    num: "04",
    href: "/",
    title: "SEO",
    description:
      "Designing for SEO (Search Engine Optimization) involves creating a website that is not only user-friendly and visually appealing but also optimized for search engines.",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {ServicesStuff.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover cursor-pointer transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
