import { ReservationCreateNestedManyWithoutTimeSlotsInput } from "./ReservationCreateNestedManyWithoutTimeSlotsInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type TimeSlotCreateInput = {
  endTime?: Date | null;
  reservations?: ReservationCreateNestedManyWithoutTimeSlotsInput;
  startTime?: Date | null;
  table?: TableWhereUniqueInput | null;
};
