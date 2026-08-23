import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ----> Función para formatear el valor de kilometraje y precio <----
export const formatNumber = (number: number | string | undefined | null) => {
  const formatString =
    number !== undefined && number !== null ? number.toString() : "";
  if (formatString.length >= 4) {
    return formatString.slice(0, -3) + "." + formatString.slice(-3);
  }
  return formatString;
};
