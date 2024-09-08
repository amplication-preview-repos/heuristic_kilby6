import { TableUpdateManyWithoutRestaurantsInput } from "./TableUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  tables?: TableUpdateManyWithoutRestaurantsInput;
};
