import { format } from "date-fns";

export const formatDate = (date: string): string => {
  const parsedDate = new Date(date);
  const formattedDate = format(parsedDate, "dd/MM/yyyy");
  return formattedDate;
};
