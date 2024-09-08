import { DiningPlace as TDiningPlace } from "../api/diningPlace/DiningPlace";

export const DININGPLACE_TITLE_FIELD = "name";

export const DiningPlaceTitle = (record: TDiningPlace): string => {
  return record.name?.toString() || String(record.id);
};
