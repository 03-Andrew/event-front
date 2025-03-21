"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import EventCard from "../event-card";
import { Event } from "@/types/types";

interface FeaturedEventsProps {
  isLoading: boolean;
  events: Event[];
}

export default function FeaturedEvents({
  isLoading,
  events,
}: FeaturedEventsProps) {
  {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Featured Events
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Check out these popular events happening soon.
              </p>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 -b-2" />
            </div>
          ) : events ? (
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {events.slice(0, 3).map((event, index) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : null}
          <div className="flex justify-center">
            <Link href="/events" passHref>
              <Button size="lg" variant="outline">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
