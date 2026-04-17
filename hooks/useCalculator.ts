"use client";
import { useState } from "react";

export const useCalculator = () => {
    const [expression, setExpression] = useState<string>("");
    const [result, setResult] = useState<string>("0");

    const handleInput = (val: string) => {
        if (val === "C") {
            setExpression("");
            setResult("0");
            return;
        }

        if (val === "=") {
            if (!expression) return;
            try {
                // Safe evaluation using the Function constructor
                const compute = new Function(`return ${expression}`)();
                const finalValue = Number.isInteger(compute) ? compute.toString() : compute.toFixed(4).toString();

                setResult(finalValue);
                setExpression(finalValue);
            } catch (error) {
                setResult("Error");
                setExpression("");
            }
            return;
        }

        // Handle operator logic and display
        setExpression((prev) => {
            // Prevent multiple operators in a row
            const lastChar = prev.slice(-1);
            const operators = ["+", "-", "*", "/"];
            if (operators.includes(val) && operators.includes(lastChar)) {
                return prev.slice(0, -1) + val;
            }
            return prev + val;
        });

        // Update the live result display
        setResult((prev) => (prev === "0" ? val : prev + val));
    };

    return { expression, result, handleInput };
};