import { SpecialHours as TSpecialHours } from "../api/specialHours/SpecialHours";

export const SPECIALHOURS_TITLE_FIELD = "id";

export const SpecialHoursTitle = (record: TSpecialHours): string => {
  return record.id?.toString() || String(record.id);
};
