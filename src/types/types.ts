
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

export type VenueSection = {
  id: number;
  name: string;
  capacity: number;
  seatRangeStart: string;
  seatRangeEnd: string;
}

export type TicketType1 = {
  id: number;
  name: string;
  price: number;
  max_tickets: number;
  venue_section: VenueSection;
  ticket_count: number;

}