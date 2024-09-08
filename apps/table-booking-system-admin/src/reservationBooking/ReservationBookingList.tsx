import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const ReservationBookingList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReservationBookings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="numberOfPersons" source="numberOfPersons" />
        <ReferenceField label="person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="restaurant"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startTime" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
