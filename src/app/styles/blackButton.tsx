import React from 'react';

interface ButtonProperties {
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const BlackButton: React.FC<ButtonProperties> = ({ children, onClick, style }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="kindaDark text-gray-200 font-bold rounded-lg py-4 px-6 flex items-center justify-center hover:bg-[#2d2d2d] focus:outline-none"
            style={{...style,}}
        >
            {children}
        </button>
    );
};

export default BlackButton;