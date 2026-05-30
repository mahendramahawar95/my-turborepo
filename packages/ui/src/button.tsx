import * as React from "react";
import { cn } from "./utils";

 type ButtonProps = React.ComponentProps<"button">;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "h-11 rounded-md bg-black px-5 text-white transition hover:opacity-90 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}