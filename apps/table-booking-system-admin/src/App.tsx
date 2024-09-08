import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TableList } from "./table/TableList";
import { TableCreate } from "./table/TableCreate";
import { TableEdit } from "./table/TableEdit";
import { TableShow } from "./table/TableShow";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { TimeSlotList } from "./timeSlot/TimeSlotList";
import { TimeSlotCreate } from "./timeSlot/TimeSlotCreate";
import { TimeSlotEdit } from "./timeSlot/TimeSlotEdit";
import { TimeSlotShow } from "./timeSlot/TimeSlotShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { PersonList } from "./person/PersonList";
import { PersonCreate } from "./person/PersonCreate";
import { PersonEdit } from "./person/PersonEdit";
import { PersonShow } from "./person/PersonShow";
import { SpecialHoursList } from "./specialHours/SpecialHoursList";
import { SpecialHoursCreate } from "./specialHours/SpecialHoursCreate";
import { SpecialHoursEdit } from "./specialHours/SpecialHoursEdit";
import { SpecialHoursShow } from "./specialHours/SpecialHoursShow";
import { WeeklyOpeningHoursList } from "./weeklyOpeningHours/WeeklyOpeningHoursList";
import { WeeklyOpeningHoursCreate } from "./weeklyOpeningHours/WeeklyOpeningHoursCreate";
import { WeeklyOpeningHoursEdit } from "./weeklyOpeningHours/WeeklyOpeningHoursEdit";
import { WeeklyOpeningHoursShow } from "./weeklyOpeningHours/WeeklyOpeningHoursShow";
import { TableGroupList } from "./tableGroup/TableGroupList";
import { TableGroupCreate } from "./tableGroup/TableGroupCreate";
import { TableGroupEdit } from "./tableGroup/TableGroupEdit";
import { TableGroupShow } from "./tableGroup/TableGroupShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SeatingList } from "./seating/SeatingList";
import { SeatingCreate } from "./seating/SeatingCreate";
import { SeatingEdit } from "./seating/SeatingEdit";
import { SeatingShow } from "./seating/SeatingShow";
import { DiningPlaceList } from "./diningPlace/DiningPlaceList";
import { DiningPlaceCreate } from "./diningPlace/DiningPlaceCreate";
import { DiningPlaceEdit } from "./diningPlace/DiningPlaceEdit";
import { DiningPlaceShow } from "./diningPlace/DiningPlaceShow";
import { ReservationBookingList } from "./reservationBooking/ReservationBookingList";
import { ReservationBookingCreate } from "./reservationBooking/ReservationBookingCreate";
import { ReservationBookingEdit } from "./reservationBooking/ReservationBookingEdit";
import { ReservationBookingShow } from "./reservationBooking/ReservationBookingShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TableBookingSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Table"
          list={TableList}
          edit={TableEdit}
          create={TableCreate}
          show={TableShow}
        />
        <Resource
          name="Restaurant"
          list={RestaurantList}
          edit={RestaurantEdit}
          create={RestaurantCreate}
          show={RestaurantShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="TimeSlot"
          list={TimeSlotList}
          edit={TimeSlotEdit}
          create={TimeSlotCreate}
          show={TimeSlotShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="Person"
          list={PersonList}
          edit={PersonEdit}
          create={PersonCreate}
          show={PersonShow}
        />
        <Resource
          name="SpecialHours"
          list={SpecialHoursList}
          edit={SpecialHoursEdit}
          create={SpecialHoursCreate}
          show={SpecialHoursShow}
        />
        <Resource
          name="WeeklyOpeningHours"
          list={WeeklyOpeningHoursList}
          edit={WeeklyOpeningHoursEdit}
          create={WeeklyOpeningHoursCreate}
          show={WeeklyOpeningHoursShow}
        />
        <Resource
          name="TableGroup"
          list={TableGroupList}
          edit={TableGroupEdit}
          create={TableGroupCreate}
          show={TableGroupShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Seating"
          list={SeatingList}
          edit={SeatingEdit}
          create={SeatingCreate}
          show={SeatingShow}
        />
        <Resource
          name="DiningPlace"
          list={DiningPlaceList}
          edit={DiningPlaceEdit}
          create={DiningPlaceCreate}
          show={DiningPlaceShow}
        />
        <Resource
          name="ReservationBooking"
          list={ReservationBookingList}
          edit={ReservationBookingEdit}
          create={ReservationBookingCreate}
          show={ReservationBookingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
