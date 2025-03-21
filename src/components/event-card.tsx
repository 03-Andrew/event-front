"use client";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { formatEventDate } from "@/lib/formatEventDate";

import { Event } from "@/types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const { date, time } = formatEventDate(event.date);
  const slug = `${event.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${date.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${event.id}`;  
    return (
    <Card className="overflow-hidden border border-[var(--border)]">
      <div className="relative h-48">
        <Image
          src="/placeholder.svg"
          alt={event.title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-2 right-2">
          {event.type.name}
        </Badge>
      </div>

      <CardHeader className="pt-4">
        <Link href={`/events/${event.id}`} className="hover:underline">
          <h3 className="text-xl font-bold line-clamp-1">{event.title}</h3>
        </Link>
      </CardHeader>

      <CardContent className="space-y-2 pb-4">
        <div className="flex items-center text-sm">
          <Calendar className="mr-1 h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm">
          <Clock className="mr-1 h-4 w-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="line-clamp-1">{event.venue.name}</span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <Link href={`/events/${slug}`} passHref>
          <Button size="sm" variant="default" className="cursor-pointer">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}