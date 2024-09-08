import { WeeklyOpeningHoursWhereInput } from "./WeeklyOpeningHoursWhereInput";
import { WeeklyOpeningHoursOrderByInput } from "./WeeklyOpeningHoursOrderByInput";

export type WeeklyOpeningHoursFindManyArgs = {
  where?: WeeklyOpeningHoursWhereInput;
  orderBy?: Array<WeeklyOpeningHoursOrderByInput>;
  skip?: number;
  take?: number;
};
