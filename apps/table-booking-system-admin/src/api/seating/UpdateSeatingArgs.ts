import { SeatingWhereUniqueInput } from "./SeatingWhereUniqueInput";
import { SeatingUpdateInput } from "./SeatingUpdateInput";

export type UpdateSeatingArgs = {
  where: SeatingWhereUniqueInput;
  data: SeatingUpdateInput;
};
