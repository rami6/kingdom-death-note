-- CreateEnum
CREATE TYPE "basic_attribute" AS ENUM ('bone', 'organ', 'hide');

-- CreateTable
CREATE TABLE "resources" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "basic_attributes" "basic_attribute"[],
    "is_consumable" BOOLEAN NOT NULL,
    "is_cat_res" BOOLEAN NOT NULL,
    "amount" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resources.name_unique" ON "resources"("name");
