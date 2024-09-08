import { Table } from "../table/Table";

export type Restaurant = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  tables?: Array<Table>;
  updatedAt: Date;
};
