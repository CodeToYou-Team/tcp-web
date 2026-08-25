import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-normal select-none transform-gpu transition-transform active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-90",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
        ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
        link: "bg-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 min-w-16 px-3 gap-2 text-xs rounded-lg",
        default: "h-10 min-w-20 px-4 gap-2 text-sm rounded-xl",
        lg: "h-12 min-w-24 px-6 gap-3 text-base rounded-[14px]",
        icon: "h-10 w-10 rounded-xl",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-lg",
        md: "rounded-xl",
        lg: "rounded-[14px]",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
