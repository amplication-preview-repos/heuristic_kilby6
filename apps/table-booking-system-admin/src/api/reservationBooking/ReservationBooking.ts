import { Person } from "../person/Person";
import { Restaurant } from "../restaurant/Restaurant";

export type ReservationBooking = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  numberOfPersons: number | null;
  person?: Person | null;
  restaurant?: Restaurant | null;
  startTime: Date | null;
  updatedAt: Date;
};
