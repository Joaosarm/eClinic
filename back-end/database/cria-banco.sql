CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" int NOT NULL
);

CREATE TABLE "specializations"(
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);

CREATE TABLE "doctors" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE,
    "picture" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "specializationId" INT NOT NULL REFERENCES specializations(id)
);

CREATE TABLE "shifts"(
    "id" SERIAL PRIMARY KEY,
    "doctorId" INT NOT NULL REFERENCES doctors(id),
    "morning" BOOLEAN DEFAULT FALSE,
    "afternoon" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "schedules"(
    "id" SERIAL PRIMARY KEY,
    "userId" INT NOT NULL REFERENCES users(id),
    "doctorId" INT NOT NULL REFERENCES doctors(id),
    "day" DATE NOT NULL,
    "hour" TIME NOT NULL
);

CREATE TABLE "days"(
    "id" SERIAL PRIMARY KEY,
    "doctorId" INT NOT NULL UNIQUE REFERENCES doctors(id),
    "monday" BOOLEAN DEFAULT false,
    "tuesday" BOOLEAN DEFAULT false,
    "wednesday" BOOLEAN DEFAULT false,
    "thursday" BOOLEAN DEFAULT false,
    "friday" BOOLEAN DEFAULT false
);