import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans uppercase tracking-[0.14em] transition-colors duration-500 ease-[var(--ease-editorial)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-carbon text-ivory hover:bg-ink",
        inverse:
          "bg-ivory text-carbon hover:bg-paper",
        outline:
          "border border-carbon/30 text-carbon hover:border-carbon",
        outlineLight:
          "border border-ivory/40 text-ivory hover:border-ivory",
        ghost: "text-carbon hover:text-gold",
      },
      size: {
        default: "px-8 py-4 text-xs",
        sm: "px-5 py-3 text-[11px]",
        lg: "px-10 py-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = forwardRef(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        <span className="relative">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
