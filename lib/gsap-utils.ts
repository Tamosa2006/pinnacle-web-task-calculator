import gsap from "gsap";

/**
 * A reusable "Hover Scale" effect for buttons
 */
export const hoverScale = (element: HTMLElement | null) => {
    if (!element) return;

    const enter = () => {
        gsap.to(element, {
            scale: 1.05,
            backgroundColor: "rgba(79, 70, 229, 0.2)", // Subtle indigo tint
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const leave = () => {
        gsap.to(element, {
            scale: 1,
            backgroundColor: "transparent",
            duration: 0.3,
            ease: "power2.inOut",
        });
    };

    element.addEventListener("mouseenter", enter);
    element.addEventListener("mouseleave", leave);

    return () => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
    };
};

/**
 * Entrance stagger preset
 */
export const staggerIn = (selector: string) => {
    return gsap.from(selector, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
    });
};