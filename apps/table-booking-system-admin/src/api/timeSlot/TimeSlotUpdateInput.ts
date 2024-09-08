import { ReservationUpdateManyWithoutTimeSlotsInput } from "./ReservationUpdateManyWithoutTimeSlotsInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type TimeSlotUpdateInput = {
  endTime?: Date | null;
  reservations?: ReservationUpdateManyWithoutTimeSlotsInput;
  startTime?: Date | null;
  table?: TableWhereUniqueInput | null;
};
