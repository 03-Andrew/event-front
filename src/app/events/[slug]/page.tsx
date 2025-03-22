"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useFetchEvent } from "@/hooks/useFetchEvents";
import useWebSocket from "@/hooks/useWebSockets";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, Share2 } from "lucide-react";
import { formatEventDate } from "@/lib/formatEventDate";
import { Button } from "@/components/ui/button";
import BookingProcess from "@/components/booking/bookingProcess";

export default function EventDetails() {
  const params = useParams() as { slug?: string | string[] };
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug ?? "";
  const id = slug.split("-").pop() ?? "";
  console.log(id);

  const userCount = useWebSocket(parseInt(id)).userCount;
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
  const { date, time } = formatEventDate(event.date);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-8rem)]">
        <div className="lg:w-3/5 space-y-6 overflow-y-auto">
          <div>
            <Link
              href="/events"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              ← Back to events
            </Link>
            <h1 className="text-3xl font-bold mt-2">{event.title}</h1>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] p-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Date</p>
                <p className="text-sm text-muted-foreground">{date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] p-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Time</p>
                <p className="text-sm text-muted-foreground">{time}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] p-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">
                  {event.venue.name}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 border-b border-[var(--border)] p-4">
            <h1 className="text-3xl font-bold mt-2">Description</h1>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
          {/* {event.organizer && (
            <>
              <Separator />
              <div>
                <h2 className="text-xl font-bold mb-2">Organizer</h2>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <p>{event.organizer}</p>
                </div>
              </div>
            </>
          )} */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
        <div className="lg:w-2/5 lg:sticky lg:top-8 lg:h-[calc(100vh-8rem)] overflow-y-auto">
          <BookingProcess id={id} />
        </div>
      </div>
      {/* Floating Sticky Card */}
      <div className="fixed bottom-4 right-4 bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-lg shadow-lg p-4">
        <p className="text-sm font-medium">Live User Count:</p>
        <p className="text-xl font-bold">{userCount}</p>
      </div>
    </div>
  );
}
