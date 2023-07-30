import { parseISO, format } from "date-fns";

type DateProps = {
  dateInput: string;
};

export default function DateElement({ dateInput }: DateProps) {
  const date = parseISO(dateInput);

  return <time dateTime={dateInput}>{format(date, "LLLL d, yyyy")}</time>;
}
