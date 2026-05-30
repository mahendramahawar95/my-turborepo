import * as React from "react";
import { cn } from "./utils";

type InputProps = React.ComponentProps<"input">;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-black",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";