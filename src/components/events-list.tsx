import { EventoEvent } from "@/lib/types"
import EventCard from "./event-card"
import { sleep } from "@/lib/util";

type EventListProps = {
  city : string
}

export default async function EventsList({
  city} : EventListProps) {

  // await sleep(2000);
  const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`, {cache: "no-cache"}) ;
  const events: EventoEvent[] = await response.json()
  
  return <section className="flex flex-wrap gap-10 justify-center px-[20px]">
    {events.map(event => (
        <EventCard key={event.id} event={event}/>
      ))}
    </section>
  
}
