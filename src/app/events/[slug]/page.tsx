"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useFetchEvent } from "@/hooks/useFetchEvents";
import useWebSocket from "@/hooks/useWebSockets";
import StadiumSeatMap from "@/components/seats";

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

  return (
    <div className="container py-10">
      <div className="flex flex-col lg:flex-row gap-8 h-svh">
        <div className="lg:w-3/5 space-y-6">
          
        </div>
        <div className="lg:w-2/5 space-y-6">

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
