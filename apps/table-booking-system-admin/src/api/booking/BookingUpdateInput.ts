import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type BookingUpdateInput = {
  bookingTime?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  status?: "Option1" | null;
  table?: TableWhereUniqueInput | null;
};
