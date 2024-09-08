import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ReservationBookingController } from "../reservationBooking.controller";
import { ReservationBookingService } from "../reservationBooking.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  endTime: new Date(),
  id: "exampleId",
  numberOfPersons: 42,
  startTime: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  endTime: new Date(),
  id: "exampleId",
  numberOfPersons: 42,
  startTime: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    endTime: new Date(),
    id: "exampleId",
    numberOfPersons: 42,
    startTime: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  endTime: new Date(),
  id: "exampleId",
  numberOfPersons: 42,
  startTime: new Date(),
  updatedAt: new Date(),
};

const service = {
  createReservationBooking() {
    return CREATE_RESULT;
  },
  reservationBookings: () => FIND_MANY_RESULT,
  reservationBooking: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ReservationBooking", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReservationBookingService,
          useValue: service,
        },
      ],
      controllers: [ReservationBookingController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /reservationBookings", async () => {
    await request(app.getHttpServer())
      .post("/reservationBookings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /reservationBookings", async () => {
    await request(app.getHttpServer())
      .get("/reservationBookings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          endTime: FIND_MANY_RESULT[0].endTime.toISOString(),
          startTime: FIND_MANY_RESULT[0].startTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /reservationBookings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reservationBookings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /reservationBookings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reservationBookings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        endTime: FIND_ONE_RESULT.endTime.toISOString(),
        startTime: FIND_ONE_RESULT.startTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /reservationBookings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/reservationBookings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/reservationBookings")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
