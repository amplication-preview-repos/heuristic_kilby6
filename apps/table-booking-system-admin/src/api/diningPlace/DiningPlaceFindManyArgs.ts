import { DiningPlaceWhereInput } from "./DiningPlaceWhereInput";
import { DiningPlaceOrderByInput } from "./DiningPlaceOrderByInput";

export type DiningPlaceFindManyArgs = {
  where?: DiningPlaceWhereInput;
  orderBy?: Array<DiningPlaceOrderByInput>;
  skip?: number;
  take?: number;
};
