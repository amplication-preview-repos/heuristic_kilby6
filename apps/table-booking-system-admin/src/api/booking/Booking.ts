import { Customer } from "../customer/Customer";
import { Table } from "../table/Table";

export type Booking = {
  bookingTime: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  status?: "Option1" | null;
  table?: Table | null;
  updatedAt: Date;
};
