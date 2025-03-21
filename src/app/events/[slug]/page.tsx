"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useFetchEvent } from "@/hooks/useFetchEvents";

export default function EventDetails() {
  const params = useParams() as { slug?: string | string[] }; // Explicit type
  // Ensure slug is always a string
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug ?? "";
  const id = slug.split("-").pop() ?? ""; // Ensure `id` is always a string
  
  console.log(id);
  
  const { data: event, isLoading, error } = useFetchEvent(id);
  

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-12">
        Failed to load event details. Please try again later.
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center text-muted-foreground py-12">
        Event not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-6">{event.title}</h1>
      <p className="text-lg text-muted-foreground mb-4">{event.description}</p>
      <div className="text-sm text-muted-foreground">
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Venue:</strong> {event.venue.name}
        </p>
      </div>
    </div>
  );
}
