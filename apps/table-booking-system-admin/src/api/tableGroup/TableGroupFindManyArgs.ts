import { TableGroupWhereInput } from "./TableGroupWhereInput";
import { TableGroupOrderByInput } from "./TableGroupOrderByInput";

export type TableGroupFindManyArgs = {
  where?: TableGroupWhereInput;
  orderBy?: Array<TableGroupOrderByInput>;
  skip?: number;
  take?: number;
};
