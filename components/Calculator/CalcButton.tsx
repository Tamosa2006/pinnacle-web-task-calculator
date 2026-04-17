"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

export default function CalcButton({ label, onClick, className = "" }: ButtonProps) {
    const btnRef = useRef(null);

    useEffect(() => {
        // Staggered pop-in animation
        gsap.from(btnRef.current, {
            scale: 0.5,
            opacity: 0,
            duration: 0.5,
            delay: Math.random() * 0.5, // Randomized slight delay for a "rain" effect
            ease: "back.out(1.7)",
        });
    }, []);

    const handlePress = () => {
        // Quick click feedback
        gsap.to(btnRef.current, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
        onClick();
    };

    const isOperator = ["/", "*", "-", "+", "="].includes(label);
    const isClear = label === "C";

    return (
        <button
            ref={btnRef}
            onClick={handlePress}
            className={`
        h-14 w-full rounded-2xl flex items-center justify-center text-xl font-medium transition-colors
        ${className}
        ${isOperator
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : isClear
                        ? "bg-slate-800 text-red-400 hover:bg-red-500/10 border border-slate-700"
                        : "bg-slate-800/40 hover:bg-slate-700 text-slate-200 border border-slate-700/50"}
      `}
        >
            {label === "*" ? "×" : label === "/" ? "÷" : label}
        </button>
    );
}