"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCalculator } from "@/hooks/useCalculator";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

export default function Calculator() {
    const containerRef = useRef(null);
    const { expression, result, handleInput } = useCalculator();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth entrance for the whole card
            gsap.from(".calc-card", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="z-10">
            <div className="calc-card w-[350px] p-8 rounded-[3rem] bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 shadow-2xl">
                {/* macOS style window controls for that "Pro" look */}
                <div className="flex gap-2 mb-8 px-1">
                    <div className="w-3 h-3 rounded-full bg-[#FF9933]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFFFFF]" />
                    <div className="w-3 h-3 rounded-full bg-[#138808]" />
                </div>

                <Display expression={expression} result={result} />
                <ButtonGrid onButtonClick={handleInput} />
            </div>
        </div>
    );
}