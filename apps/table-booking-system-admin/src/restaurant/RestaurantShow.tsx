import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { RESTAURANT_TITLE_FIELD } from "./RestaurantTitle";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Number" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ReservationBooking"
          target="restaurantId"
          label="ReservationBookings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="endTime" source="endTime" />
            <TextField label="ID" source="id" />
            <TextField label="numberOfPersons" source="numberOfPersons" />
            <ReferenceField
              label="person"
              source="person.id"
              reference="Person"
            >
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Seating"
          target="restaurantId"
          label="Seatings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="restaurant"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="seatingCapacity" source="seatingCapacity" />
            <TextField label="tableNumber" source="tableNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Table"
          target="restaurantId"
          label="Tables"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Restaurant"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Seating Capacity" source="seatingCapacity" />
            <TextField label="Table Number" source="tableNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
