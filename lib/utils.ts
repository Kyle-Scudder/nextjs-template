import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// generated by shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// created by chatgpt
export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}

// created by chatgpt
export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${time} - ${formattedDate}`;
}

// created by chatgpt
export function formatThreadCount(count: number): string {
  if (count === 0) {
    return "No Threads";
  } else {
    const threadCount = count.toString().padStart(2, "0");
    const threadWord = count === 1 ? "Thread" : "Threads";
    return `${threadCount} ${threadWord}`;
  }
}

export const convertBase64ToFile = (base64String: string) => {
      // Extract the base64 data
    var imageData = base64String.split(',')[1]; // Remove "data:image/jpeg;base64," part

    // Convert base64 to binary
    var binaryImageData = atob(imageData);

    // Create a Uint8Array from the binary data
    var uint8Array = new Uint8Array(binaryImageData.length);
    for (var i = 0; i < binaryImageData.length; i++) {
        uint8Array[i] = binaryImageData.charCodeAt(i);
    }

    // Create a Blob from the Uint8Array
    var blob = new Blob([uint8Array], { type: 'image/jpeg' });

    // Create a File object from the Blob
    return new File([blob], 'image.jpg', { type: 'image/jpeg' });
}