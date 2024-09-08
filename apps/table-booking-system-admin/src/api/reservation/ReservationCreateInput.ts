import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type ReservationCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  table?: TableWhereUniqueInput | null;
  timeSlot?: TimeSlotWhereUniqueInput | null;
};
