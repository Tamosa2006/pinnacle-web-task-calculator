"use client";
import CalcButton from "./CalcButton";

const KEYS = [
    "C", "/", "*", "-",
    "7", "8", "9", "+",
    "4", "5", "6", "=",
    "1", "2", "3", "0", ".",
];

export default function ButtonGrid({ onButtonClick }: { onButtonClick: (val: string) => void }) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {KEYS.map((key) => (
                <CalcButton
                    key={key}
                    label={key}
                    onClick={() => onButtonClick(key)}
                    // Wide button for zero
                    className={key === "0" ? "col-span-1" : ""}
                />
            ))}
        </div>
    );
}