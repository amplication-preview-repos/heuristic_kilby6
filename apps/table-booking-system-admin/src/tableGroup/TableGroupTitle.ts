import { TableGroup as TTableGroup } from "../api/tableGroup/TableGroup";

export const TABLEGROUP_TITLE_FIELD = "id";

export const TableGroupTitle = (record: TTableGroup): string => {
  return record.id?.toString() || String(record.id);
};
