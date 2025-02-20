"use client";

import React from 'react';
import Link from "next/link";
import Logo from "/public/logo.png";
import Button from "../app/styles/button";
import { motion } from 'framer-motion';


const LandingPage: React.FC = () => {
  return(
    <motion.div 
    className="flex flex-col flex-wrap bg-[#1B1B1B] text-center px-8 w-full h-screen items-center justify-center text-gray-200"
            initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src={Logo.src} 
          alt="Logo"
          className="w-64"
        />
        <h1 className="righteous text-5xl md:text-7xl lg:text-5xl p-5">Case Closed</h1>
      </div>

      <div className="flex flex-col text-base md:text-3xl lg:text-base text-center items-center justify-center px-4">
        <p>A place where mystery enthusiasts come together.</p>
        <p><i>Craft Twists. Crack Mysteries. Close the Case.</i></p>
        <Link href="/auth">
          <Button style={{margin: '1.2rem 1.2rem'}}>Get Started</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default LandingPage; 