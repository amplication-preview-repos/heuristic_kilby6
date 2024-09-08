import { SeatingWhereInput } from "./SeatingWhereInput";
import { SeatingOrderByInput } from "./SeatingOrderByInput";

export type SeatingFindManyArgs = {
  where?: SeatingWhereInput;
  orderBy?: Array<SeatingOrderByInput>;
  skip?: number;
  take?: number;
};
