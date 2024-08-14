import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { EventoEvent, PrismaClient } from "@prisma/client"
import prisma from "./db";
import { notFound } from "next/navigation";

type Props = {
    params: {
      slug: string
    }
  }

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

export async function getEvents(city : string) {
    // const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`, {
    //     next: {
    //       revalidate: 300, 
    //     }
    //   })  ;
    //   const events: EventoEvent[] = await response.json()
    const events = await prisma.eventoEvent.findMany({
      where:{
        city: city === "all" ? undefined : capitalize(city),
      },
      orderBy: {
        date: "asc"
      }
    })

    return events;
}

export async function getEvent(slug: string){
    // const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
    // const event: EventoEvent = await response.json();
    const event = await prisma.eventoEvent.findUnique({
      where:{
        slug: slug,
      }
    });

    if (!event){
      return notFound();
    }
    
    return event;
}