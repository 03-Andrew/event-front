'use client';
import {useFetchEvents} from '@/hooks/useFetchEvents';
import EventCard from '@/components/event-card';

export default function Event() {
  const { data: events, isLoading, isError } = useFetchEvents();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent border-primary"></div>
        </div>
      ) : isError ? (
        <div className="text-red-500">Failed to load events. Please try again later.</div>
      ) : events && events.length > 0 ? (
        <div className="mx-auto grid max-w-6xl gap-4 py-12 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground">No events available at the moment.</div>
      )}
    </div>
  );
}