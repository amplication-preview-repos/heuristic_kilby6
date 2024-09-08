import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PERSON_TITLE_FIELD } from "./PersonTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const PersonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ReservationBooking"
          target="personId"
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
      </SimpleShowLayout>
    </Show>
  );
};
