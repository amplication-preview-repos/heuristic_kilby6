import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ReservationBookingTitle } from "../reservationBooking/ReservationBookingTitle";

export const PersonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="reservationBookings"
          reference="ReservationBooking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationBookingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
