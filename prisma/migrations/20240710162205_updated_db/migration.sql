-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "funder_id" INTEGER NOT NULL,
    "activityName" VARCHAR(255) NOT NULL,
    "activityType" VARCHAR(255) NOT NULL,
    "activityLocation" VARCHAR(255) NOT NULL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cared-for" (
    "id" SERIAL NOT NULL,
    "carer_id" INTEGER NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "ageGroup" INTEGER NOT NULL,
    "relationshipToCarer" VARCHAR(255) NOT NULL,
    "hasHealthCondition" VARCHAR(255) NOT NULL,
    "DisabilityRegistrationNum" INTEGER NOT NULL,

    CONSTRAINT "cared-for_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carer" (
    "id" SERIAL NOT NULL,
    "emergency_contact_id" INTEGER NOT NULL,
    "title" VARCHAR(4) NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "phoneNum" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "addressLine1" VARCHAR(255) NOT NULL,
    "addressLine2" VARCHAR(255) NOT NULL,
    "postcode" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "ethnicity" VARCHAR(255) NOT NULL,
    "faith" VARCHAR(255) NOT NULL,
    "sexualOrientation" VARCHAR(255) NOT NULL,
    "hasHealthCondition" VARCHAR(3) NOT NULL,
    "typeHealthCondition" VARCHAR(255),
    "hasDisability" VARCHAR(3) NOT NULL,
    "typeDisability" VARCHAR(255),
    "hasAllergies" VARCHAR(3) NOT NULL,
    "typeAllergies" VARCHAR(255),
    "nameSurgeryDoctor" VARCHAR(255) NOT NULL,
    "referredBy" VARCHAR(255) NOT NULL,
    "preferredContact" VARCHAR(255) NOT NULL,
    "dateJoined" DATE,
    "recordAdded" TIMESTAMP(6),

    CONSTRAINT "carer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emergency Contact" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "relationshipToCarer" VARCHAR(255) NOT NULL,
    "addressLine1" VARCHAR(255) NOT NULL,
    "addressLine2" VARCHAR(255) NOT NULL,
    "phoneNum" INTEGER NOT NULL,

    CONSTRAINT "emergency_contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funder" (
    "id" INTEGER NOT NULL,
    "funderName" VARCHAR(255),

    CONSTRAINT "funder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session Attendance" (
    "id" SERIAL NOT NULL,
    "activity_id" INTEGER NOT NULL,
    "carer_id" INTEGER NOT NULL,
    "sessionDate" DATE NOT NULL,
    "notes" VARCHAR(255),

    CONSTRAINT "SessionAttendace_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "funder_fkey" FOREIGN KEY ("funder_id") REFERENCES "Funder"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Cared-for" ADD CONSTRAINT "carer_fkey" FOREIGN KEY ("carer_id") REFERENCES "Carer"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Carer" ADD CONSTRAINT "emergency_contact_fkey" FOREIGN KEY ("emergency_contact_id") REFERENCES "Emergency Contact"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Session Attendance" ADD CONSTRAINT "activity_fkey" FOREIGN KEY ("activity_id") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Session Attendance" ADD CONSTRAINT "carer_fkey" FOREIGN KEY ("carer_id") REFERENCES "Carer"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
