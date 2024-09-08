import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type TimeSlotWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  reservations?: ReservationListRelationFilter;
  startTime?: DateTimeNullableFilter;
  table?: TableWhereUniqueInput;
};
