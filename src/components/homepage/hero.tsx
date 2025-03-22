"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="w-full h-[100vh] overflow-hidden relative ">
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        {/* Add overlay with blur */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-20" />
        {/* Update gradient overlay z-index */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-background/90 z-10" />
        <Image
          src="/placeholder.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        className="relative z-20 h-full flex flex-col justify-center"
        style={{ y: textY, opacity: opacityText }}
      >
        <div className="max-w-2xl space-y-4 p-4 md:p-6 container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-md">
            Book Your Next Event Experience
          </h1>
          <p className="max-w-[600px] text-white/90 md:text-xl drop-shadow">
            Discover and book tickets for the best concerts, sports events, and
            performances in your area.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <Link href="/events" passHref>
              <Button size="lg" className="gap-1 primary">
                Browse Events <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/signup" passHref>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 dark:bg-background/10 dark:border-background/20 dark:hover:bg-background/20"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
