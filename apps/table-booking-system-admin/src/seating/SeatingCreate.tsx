import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const SeatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="seatingCapacity"
          source="seatingCapacity"
        />
        <NumberInput step={1} label="tableNumber" source="tableNumber" />
      </SimpleForm>
    </Create>
  );
};
