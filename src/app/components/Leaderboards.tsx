"use client";

import React from "react";
import RankBubble from "../styles/rankBubble";

const Leaderboards: React.FC = () => {
    return(
        <aside className="hidden md:flex flex-col gap-4 mx-10 w-[900px]">
            <div className="flex flex-col rounded-md border-2 border-gray-500 p-4">
                <h2 className="righteous text-2xl self-center mb-2">Detective Leaderboards</h2>
                <RankBubble rank="1" name="JonEdnrcika" points="1000" />
                <RankBubble rank="2" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="3" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="4" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="5" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="6" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="7" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="8" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="9" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="10" name="Jon Ednrcik" points="1000" />
              

                
            </div>

            <div className="flex flex-col rounded-md border-2 border-gray-500 p-4">
                <h2 className="righteous text-2xl self-center mb-2">Mastermind Leaderboards</h2>
                <RankBubble rank="1" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="2" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="3" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="4" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="5" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="6" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="7" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="8" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="9" name="Jon Ednrcik" points="1000" />
                <RankBubble rank="10" name="Jon Ednrcik" points="1000" />
              

                
            </div>
        </aside>
    );
};

export default Leaderboards;