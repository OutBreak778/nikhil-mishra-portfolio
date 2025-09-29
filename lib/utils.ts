import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDateTime(date: Date) {
  return date.toLocaleString("en-IN", {
    weekday: "short", // Mon, Tue, ...
    day: "2-digit", // 01, 02
    month: "short", // Jan, Feb
    year: "numeric", // 2025
    hour: "2-digit", // 01, 02
    minute: "2-digit", // 00-59
    second: "2-digit", // 00-59
  });
}

