import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full font-medium text-lg dark:text-light sm:text-base">
      <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 py-8 flex items-center justify-center lg:py-6">
        <span>2025 © All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

