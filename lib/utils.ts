import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(word: string) {
  if (!word) return word; // return original word if it's falsy
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatTime(timeValue: string) {
  // Assuming timeValue is in 'HH:mm:ss' format
  const [hours, minutes, seconds] = timeValue.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, seconds);

  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
}