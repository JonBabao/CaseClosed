import React from "react";

interface ButtonProperties {
    rank: React.ReactNode;
    name: React.ReactNode;
    points: React.ReactNode;
    onClick?: () => void; 
    style?: React.CSSProperties;
}

const RankBubble: React.FC<ButtonProperties> = ({ rank, name, points, onClick, style }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="lightDark text-gray-200 font-bold rounded-sm py-2 px-6 flex items-center justify-center hover:bg-[#2d2d2d] focus:outline-none w-full"
            style={{ ...style }}
        >
            <div className="flex w-full justify-between items-center">
                <span className="mr-4">{rank}</span>
                <span className="mr-4">{name}</span>
                <span>{points}</span>
            </div>
        </button>
    );
};

export default RankBubble;
