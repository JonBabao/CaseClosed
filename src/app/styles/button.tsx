import React from 'react';

interface ButtonProperties {
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProperties> = ({ children, onClick, style }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="bg-gray-200 text-gray-700 font-bold rounded-lg py-4 px-6 flex items-center justify-center hover:bg-gray-100 focus:outline-none"
            style={{...style,}}
        >
            {children}
        </button>
    );
};

export default Button;