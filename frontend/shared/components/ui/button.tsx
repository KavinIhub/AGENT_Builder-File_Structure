import { ButtonHTMLAttributes, forwardRef } from "react";

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ children, ...props }, ref) => {
        return (
            <button ref={ref} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
