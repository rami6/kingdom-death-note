-- CreateEnum
CREATE TYPE "BasicAttribute" AS ENUM ('BONE', 'ORGAN', 'HIDE');

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "basicAttributes" "BasicAttribute"[],
    "isConsumable" BOOLEAN NOT NULL,
    "isCatRes" BOOLEAN NOT NULL,
    "amount" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resource.name_unique" ON "Resource"("name");
