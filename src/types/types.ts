export interface Venue{
    id: number;
    name: string;
    address: string;
    capacity: number;
}


export interface EventType{
    id: number;
    name: string;
    description: string;
}

export type Event = {
  id: number;
  venue: Pick<Venue, "id" | "name">;
  type: Pick<EventType, "id" | "name">;
  title: string;
  description: string;
  date: string;
  max_tickets: number;
}