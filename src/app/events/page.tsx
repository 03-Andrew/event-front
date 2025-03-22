"use client";
import { useFetchEvents } from "@/hooks/useFetchEvents";
import EventCard from "@/components/event-card";
import SearchBar from "@/components/search-bar";
import { useState } from "react";

export default function Event() {
  const { data: events, isLoading, isError } = useFetchEvents();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events?.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 py-8 flex-grow">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">Events</h1>
            <div className="max-w-md">
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent border-primary"></div>
            </div>
          ) : isError ? (
            <div className="text-red-500">
              Failed to load events. Please try again later.
            </div>
          ) : filteredEvents && filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground py-12 text-center">
              {events?.length ? "No events match your search." : "No events available at the moment."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
