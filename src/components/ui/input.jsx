import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(({ className, label, ...props }, ref) => {
  return (
    <label className="flex flex-col gap-2 text-left">
      {label && (
        <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-stone">
          {label}
        </span>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full border-b border-carbon/20 bg-transparent py-2 font-sans text-sm text-carbon placeholder:text-stone/70 outline-none transition-colors duration-300 focus:border-carbon",
          className
        )}
        {...props}
      />
    </label>
  );
});
Input.displayName = "Input";

const TextArea = forwardRef(({ className, label, ...props }, ref) => {
  return (
    <label className="flex flex-col gap-2 text-left">
      {label && (
        <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-stone">
          {label}
        </span>
      )}
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none border-b border-carbon/20 bg-transparent py-2 font-sans text-sm text-carbon placeholder:text-stone/70 outline-none transition-colors duration-300 focus:border-carbon",
          className
        )}
        {...props}
      />
    </label>
  );
});
TextArea.displayName = "TextArea";

export { Input, TextArea };
