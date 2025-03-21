'use client';
import { Button } from "@/components/ui/button"; 
import { CardWithForm } from "@/components/card-with-form";
import ModeToggle from "@/components/mode-toggle";
import {useFetchEvents} from "@/hooks/useFetchEvents";


export default function Home() {
  const { data, isLoading, isError } = useFetchEvents();
  console.log(data, isLoading, isError);
  return (
    <div>
      <ModeToggle />
      <Button>Click me</Button>
      <CardWithForm />
    </div>
  );
}
