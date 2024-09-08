import { TableCreateNestedManyWithoutRestaurantsInput } from "./TableCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  tables?: TableCreateNestedManyWithoutRestaurantsInput;
};
