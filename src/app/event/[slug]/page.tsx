import Image from "next/image";
import H1 from "@/components/h1";

type EventPageProps = {
  params: {
    slug: string
  }
}

export default async function EventPage({
  params
}: EventPageProps) {
  const slug = params.slug;
  const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
  const event = await response.json();

  
  return <main>
   <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
      <Image  
        src={event.imageUrl} 
        className="object-cover z-0 blur-3xl"
        alt="Event background image" 
        fill 
        sizes="(max-width: 1280px) 100vw, 1280px"
        quality={50}
        priority
      />
   
   <div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
      <Image 
        src={event.imageUrl} 
        alt={event.name}
        width={300}
        height={201}
        className="rounded-xl border-2 border-white/50 object-cover"
      />

      <div className="flex flex-col">
        <p className="text-white/75">
          {new Date(event.date).toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
          })}
        </p>

        <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
          {event.name}
        </H1>
        
        <p className="whitespace-nowrap text-xl text-white/75">
          Organized by <span className="italic">{event.organizerName}</span>
        </p>

        <button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">Get Tickets</button>
      </div>
    </div>

   </section>
      <div className="text-center px-5 py-16 min-h-[75vh]">
          <Section>
            <SectionHeading>About this event</SectionHeading>
            <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">{event.description}</p>
          </Section>
          
          <Section>
            <SectionHeading>Location</SectionHeading>
            <SectionContent>{event.location}</SectionContent>
          </Section>
      
      
      </div>

  </main>
}

function Section({children}: { children: React.ReactNode}) {
  return <section className="mb-12">{children}</section>
}

function SectionHeading({children}: {children: React.ReactNode}){
  return <h2 className="text-2xl mb-8">{children}</h2>
}

function SectionContent({children}: {children: React.ReactNode}){
  return  <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">{children}</p>
}