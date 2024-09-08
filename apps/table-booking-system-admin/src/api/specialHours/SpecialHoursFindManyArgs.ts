import { SpecialHoursWhereInput } from "./SpecialHoursWhereInput";
import { SpecialHoursOrderByInput } from "./SpecialHoursOrderByInput";

export type SpecialHoursFindManyArgs = {
  where?: SpecialHoursWhereInput;
  orderBy?: Array<SpecialHoursOrderByInput>;
  skip?: number;
  take?: number;
};
