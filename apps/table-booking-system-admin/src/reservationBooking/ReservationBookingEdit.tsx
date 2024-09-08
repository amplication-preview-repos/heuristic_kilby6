import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PersonTitle } from "../person/PersonTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const ReservationBookingEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="endTime" source="endTime" />
        <NumberInput
          step={1}
          label="numberOfPersons"
          source="numberOfPersons"
        />
        <ReferenceInput source="person.id" reference="Person" label="person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <DateTimeInput label="startTime" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
