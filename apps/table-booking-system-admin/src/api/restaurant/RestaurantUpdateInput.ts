import { ReservationBookingUpdateManyWithoutRestaurantsInput } from "./ReservationBookingUpdateManyWithoutRestaurantsInput";
import { SeatingUpdateManyWithoutRestaurantsInput } from "./SeatingUpdateManyWithoutRestaurantsInput";
import { TableUpdateManyWithoutRestaurantsInput } from "./TableUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  reservationBookings?: ReservationBookingUpdateManyWithoutRestaurantsInput;
  seatings?: SeatingUpdateManyWithoutRestaurantsInput;
  tables?: TableUpdateManyWithoutRestaurantsInput;
};
