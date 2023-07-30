import { parseISO, format } from "date-fns";

type DateProps = {
  dateInput: string;
};
export default function Date({ dateInput }: DateProps) {
  const date = format(parseISO(dateInput), "LLL d, yyyy");
  return date;
}
