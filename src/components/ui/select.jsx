import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Select = forwardRef(({ className, label, children, ...props }, ref) => {
  return (
    <label className="flex flex-col gap-2 text-left">
      {label && (
        <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-stone">
          {label}
        </span>
      )}
      <span className="relative block">
        <select
          ref={ref}
          className={cn(
            "w-full cursor-pointer appearance-none border-b border-carbon/20 bg-transparent py-2 pr-6 font-sans text-sm text-carbon outline-none transition-colors duration-300 focus:border-carbon",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-stone"
          strokeWidth={1.5}
        />
      </span>
    </label>
  );
});
Select.displayName = "Select";

export { Select };
