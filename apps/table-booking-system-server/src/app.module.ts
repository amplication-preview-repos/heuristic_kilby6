import { Module } from "@nestjs/common";
import { TableModule } from "./table/table.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { BookingModule } from "./booking/booking.module";
import { CustomerModule } from "./customer/customer.module";
import { TimeSlotModule } from "./timeSlot/timeSlot.module";
import { ReservationModule } from "./reservation/reservation.module";
import { PersonModule } from "./person/person.module";
import { SpecialHoursModule } from "./specialHours/specialHours.module";
import { WeeklyOpeningHoursModule } from "./weeklyOpeningHours/weeklyOpeningHours.module";
import { TableGroupModule } from "./tableGroup/tableGroup.module";
import { UserModule } from "./user/user.module";
import { SeatingModule } from "./seating/seating.module";
import { DiningPlaceModule } from "./diningPlace/diningPlace.module";
import { ReservationBookingModule } from "./reservationBooking/reservationBooking.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    TableModule,
    RestaurantModule,
    BookingModule,
    CustomerModule,
    TimeSlotModule,
    ReservationModule,
    PersonModule,
    SpecialHoursModule,
    WeeklyOpeningHoursModule,
    TableGroupModule,
    UserModule,
    SeatingModule,
    DiningPlaceModule,
    ReservationBookingModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
