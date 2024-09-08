import { Reservation } from "../reservation/Reservation";
import { Table } from "../table/Table";

export type TimeSlot = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  reservations?: Array<Reservation>;
  startTime: Date | null;
  table?: Table | null;
  updatedAt: Date;
};
