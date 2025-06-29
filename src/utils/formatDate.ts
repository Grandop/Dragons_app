import { format } from "date-fns";

export function formatDate(date: string): string {
  const parsedDate = new Date(date);
  const formattedDate = format(parsedDate, "dd/MM/yyyy");
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  return `${formattedDate} as ${hours}h:${minutes}m`;
}
