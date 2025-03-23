"use client";

import { useRef } from "react";
import Link from "next/link";
// import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";

export function CallToAction() {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // });

  // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  // const opacity = useTransform(
  //   scrollYProgress,
  //   [0, 0.2, 0.8, 1],
  //   [0.6, 1, 1, 0.6]
  // );

  return (
    <section
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Experience Amazing Events?
            </h2>
            <p className="max-w-[900px] md:text-xl">
              Join thousands of satisfied customers who book with us every day.
            </p>
          </div>
          <Link href="/events" passHref>
            <Button
              size="lg"
              variant="secondary"
              className="mt-4 hover:bg-secondary/90"
            >
              Find Your Next Event
            </Button>
          </Link>
        </div>
      </div>
      </section>
  );
}
