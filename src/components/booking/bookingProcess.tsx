"use client";
import { useState } from "react";
import { useFetchEventTicketTypes } from "@/hooks/useFetchEvents";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BookingProcess({ id }: { id: string }) {
  const { data: ticketTypes, isLoading, error } = useFetchEventTicketTypes(id);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSelectTicket = (ticketId: string) => {
    setSelectedTicket(ticketId);
  };

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold mt-2">Book Ticket</h1>
      <div className="flex-1 mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {ticketTypes?.map((ticketType) => (
            <Card
              key={ticketType.id}
              className={`cursor-pointer ${
                selectedTicket === ticketType.id.toString()
                  ? "border-primary bg-primary/10"
                  : "border-[var(--border)]"
              }`}
              onClick={() => handleSelectTicket(ticketType.id.toString())}
            >
              <CardHeader>
                <CardTitle>{ticketType.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      {selectedTicket && (
        <div className="mt-4">
          <Button className="w-full">Proceed with Ticket</Button>
        </div>
      )}
    </div>
  );
}