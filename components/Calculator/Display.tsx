"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface DisplayProps {
    expression: string;
    result: string;
}

export default function Display({ expression, result }: DisplayProps) {
    const resultRef = useRef(null);

    // Animate result whenever it changes
    useEffect(() => {
        gsap.fromTo(resultRef.current,
            { opacity: 0, x: 10 },
            { opacity: 1, x: 0, duration: 0.3 }
        );
    }, [result]);

    return (
        <div className="mb-10 px-2 text-right select-none">
            <div className="text-slate-500 text-sm font-medium h-6 tracking-wider overflow-hidden truncate">
                {expression || "0"}
            </div>
            <div
                ref={resultRef}
                className="text-white text-6xl font-light tracking-tighter truncate"
            >
                {result}
            </div>
        </div>
    );
}