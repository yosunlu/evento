import EventCard from "./event-card"
import { sleep } from "@/lib/util";
import { getEvents } from "@/lib/util";

type EventListProps = {
  city : string
}

export default async function EventsList({
  city} : EventListProps) {

  // await sleep(2000);
  const events = await getEvents(city);
  
  return <section className="flex flex-wrap gap-10 justify-center px-[20px]">
    {events.map(event => (
        <EventCard key={event.id} event={event}/>
      ))}
    </section>
}
