"use client";

import React from  'react';
import Link from 'next/link';
import Logo from '/public/logo.png';
import General from './General';
import Featured from './Featured';
import Recent from './Recent';
import AllMysteries from './AllMysteries';
import Leaderboards from './Leaderboards';

const Home: React.FC = () => {
    return(
        <div className="flex flex-row text-xs kindaDark w-full md:px-8 my-10 mt-24 justify-center text-gray-200">
            <div className="flex flex-col w-[90vw] md:w-auto gap-10 justify-center items-center">
                <General />
                <Featured />
                <Recent />
                <AllMysteries />
            </div>
            <Leaderboards />

        </div>
    );
};

export default Home;