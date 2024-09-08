import { Seating as TSeating } from "../api/seating/Seating";

export const SEATING_TITLE_FIELD = "id";

export const SeatingTitle = (record: TSeating): string => {
  return record.id?.toString() || String(record.id);
};
