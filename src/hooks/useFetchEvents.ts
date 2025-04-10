// filepath: c:\Users\james nadela\ninja\ninja_front\src\hooks\useFetchEvents.ts
'use client';
import { useQuery } from '@tanstack/react-query';
import { Event, TicketType1 } from '@/types/types';
import { api } from '@/lib/api';


async function fetchEvents(): Promise<Event[]> {
  const response = await api.get<Event[]>("api/events/");
  return response.data;
}

async function fetchEvent(id: string): Promise<Event> {
  const response = await api.get<Event>(`api/events/${id}`);
  return response.data;
}

async function fetchEventTicketTypes(id: string): Promise<TicketType1[]> {
  const response = await api.get<TicketType1[]>(`api/events/ticket-types/${id}`);
  return response.data;
}

const useFetchEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    refetchOnWindowFocus: false,
  });
};

const useFetchEvent=(id: string)=> {
  return useQuery({
    queryKey: ["event", id],
    queryFn: () => fetchEvent(id),
    refetchOnWindowFocus: false,
  });
}

const useFetchEventTicketTypes = (id: string) => {
  return useQuery({
    queryKey: ["eventTicketTypes", id],
    queryFn: () => fetchEventTicketTypes(id),
    refetchOnWindowFocus: false,
  });
};



export {useFetchEvents, useFetchEvent, useFetchEventTicketTypes};