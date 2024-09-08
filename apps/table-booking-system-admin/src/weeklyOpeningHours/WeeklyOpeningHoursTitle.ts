import { WeeklyOpeningHours as TWeeklyOpeningHours } from "../api/weeklyOpeningHours/WeeklyOpeningHours";

export const WEEKLYOPENINGHOURS_TITLE_FIELD = "id";

export const WeeklyOpeningHoursTitle = (
  record: TWeeklyOpeningHours
): string => {
  return record.id?.toString() || String(record.id);
};
