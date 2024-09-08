import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const SeatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
