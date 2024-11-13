import React from "react";

export default function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="w-full py-5 flex justify-center items-center text-xl font-semibold">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-7xl leading-none tracking-tight font-semibold">
          DOCS...
        </h1>
      </div>
    </>
  );
}
