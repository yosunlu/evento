import EventsList from "@/components/events-list"
import H1 from "@/components/h1"
import { EventoEvent } from "@/lib/types"

type EventsPageProps = {
  params: {
    city: string
  }
}

export default async function EventsPage({params}: EventsPageProps) {
  const response = await fetch("https://bytegrad.com/course-assets/projects/evento/api/events?city=austin");
  const city = params.city;
  const events: EventoEvent[] = await response.json()
  

  return <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
    <H1>
      {city === "all" && "All Events"}
      {city !== "all" && ` Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
     </H1>

  <EventsList events={events} />

  </main>
}
