'use client';
import { Calendar, MapPin, Ticket } from "lucide-react";
import FeatureCard from "./feature-card";

export default function Features() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Why Choose Us
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              We provide a seamless booking experience with the best selection
              of events.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
          <FeatureCard
            icon={<Ticket className="h-12 w-12 text-primary" />}
            title="Secure Booking"
            description="Safe and secure payment processing for all your purchases."
          />
          <FeatureCard
            icon={<Calendar className="h-12 w-12 text-primary" />}
            title="Wide Selection"
            description="Thousands of events to choose from."
          />
          <FeatureCard
            icon={<MapPin className="h-12 w-12 text-primary" />}
            title="Local Events"
            description="Find events near you with our location-based search."
          />
        </div>
      </div>
    </div>
  );
}