import { format } from "date-fns";

export function formatEventDate(dateString: string) {
  const date = new Date(dateString);
  return {
    date: format(date, "MMMM dd, yyyy"),
    time: format(date, "h:mm a"),
  };
}
