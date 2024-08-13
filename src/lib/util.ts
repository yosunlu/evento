import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}

export async function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    })
}

export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}