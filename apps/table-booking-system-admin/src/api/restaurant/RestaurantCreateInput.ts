import { ReservationBookingCreateNestedManyWithoutRestaurantsInput } from "./ReservationBookingCreateNestedManyWithoutRestaurantsInput";
import { SeatingCreateNestedManyWithoutRestaurantsInput } from "./SeatingCreateNestedManyWithoutRestaurantsInput";
import { TableCreateNestedManyWithoutRestaurantsInput } from "./TableCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  reservationBookings?: ReservationBookingCreateNestedManyWithoutRestaurantsInput;
  seatings?: SeatingCreateNestedManyWithoutRestaurantsInput;
  tables?: TableCreateNestedManyWithoutRestaurantsInput;
};
