/*
  Warnings:

  - You are about to drop the column `time` on the `Appointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "time",
ALTER COLUMN "date" SET DEFAULT '2020-03-19 12:21:00 +00:00';
