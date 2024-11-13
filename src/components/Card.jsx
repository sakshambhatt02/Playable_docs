import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

export default function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        className="relative flex-shrink-0 p-4 w-60 h-80 bg-teal-100 rounded-3xl flex flex-col gap-2 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm">{data.desc}</p>
        <div className="absolute bottom-0 w-full left-0">
          <div className="flex flex-row items-center justify-between mb-5 py-2 px-8">
            <p className="font-semibold">{data.fileSize}</p>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdClose />
              ) : (
                <FiDownload size="0.9rem" color="white" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`w-full h-10 flex justify-center items-center ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              }`}
            >
              <p className="font-semibold">{data.tag.tagTitle}</p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
