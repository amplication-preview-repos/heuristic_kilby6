import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type BookingWhereInput = {
  bookingTime?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  table?: TableWhereUniqueInput;
};
