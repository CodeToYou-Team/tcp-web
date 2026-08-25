import * as React from "react";

import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isPressable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, isPressable, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-[14px] bg-card text-card-foreground shadow-md",
        isPressable &&
          "cursor-pointer transform-gpu transition-transform active:scale-[0.97]",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex w-full shrink-0 items-center justify-start p-3",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-auto w-full flex-1 flex-auto flex-col p-3 text-left break-words",
      className
    )}
    {...props}
  />
));
CardBody.displayName = "CardBody";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-auto w-full items-center p-3", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardBody, CardFooter };
