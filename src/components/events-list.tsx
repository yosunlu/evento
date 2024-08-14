import EventCard from "./event-card"
import { sleep } from "@/lib/util";
import { getEvents } from "@/lib/util";
import PaginationControls from "./pagination-controls";

type EventListProps = {
  city : string,
  page?: number
}

export default async function EventsList({
  city, page
} : EventListProps) {

  // await sleep(2000);
  const {events, totalCount} = await getEvents(city, page = 1);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : ""
  const nextPath = totalCount > 6 * page ?  `/events/${city}?page=${page + 1}` : ""
  
  return <section className="flex flex-wrap gap-10 justify-center px-[20px]">
    {events.map(event => (
        <EventCard key={event.id} event={event}/>
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath}/>
    </section>
}
