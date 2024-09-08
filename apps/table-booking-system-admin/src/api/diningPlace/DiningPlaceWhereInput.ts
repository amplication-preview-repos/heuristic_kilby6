import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DiningPlaceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  ownerId?: StringNullableFilter;
};
