import { Customer } from "../customer/Customer";
import { Table } from "../table/Table";
import { TimeSlot } from "../timeSlot/TimeSlot";

export type Reservation = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  table?: Table | null;
  timeSlot?: TimeSlot | null;
  updatedAt: Date;
};
