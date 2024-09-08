import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type ReservationBookingCreateInput = {
  endTime?: Date | null;
  numberOfPersons?: number | null;
  person?: PersonWhereUniqueInput | null;
  restaurant?: RestaurantWhereUniqueInput | null;
  startTime?: Date | null;
};
