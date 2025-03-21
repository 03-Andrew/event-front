'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardWithForm } from "@/components/card-with-form";
import  ModeToggle from "@/components/mode-toggle";
import {useFetchEvents} from "@/hooks/useFetchEvents";
import Hero from "@/components/homepage/hero";
import Features from "@/components/homepage/features";
import FeaturedEvents from "@/components/homepage/events-featured";
import { CallToAction } from "@/components/homepage/call-to-action";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  const { data, isLoading, isError } = useFetchEvents();
  console.log(data, isLoading, isError);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Hero/>
      <Features/>
      <FeaturedEvents isLoading={isLoading} events={data || []} />
      <CallToAction />
      <Footer />
    </div>
  );
}