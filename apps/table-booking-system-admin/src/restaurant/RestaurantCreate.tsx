import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ReservationBookingTitle } from "../reservationBooking/ReservationBookingTitle";
import { SeatingTitle } from "../seating/SeatingTitle";
import { TableTitle } from "../table/TableTitle";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceArrayInput
          source="reservationBookings"
          reference="ReservationBooking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationBookingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="seatings"
          reference="Seating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SeatingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tables"
          reference="Table"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TableTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
