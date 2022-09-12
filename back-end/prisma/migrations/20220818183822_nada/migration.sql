/*
  Warnings:

  - You are about to drop the column `friday` on the `days` table. All the data in the column will be lost.
  - You are about to drop the column `monday` on the `days` table. All the data in the column will be lost.
  - You are about to drop the column `thursday` on the `days` table. All the data in the column will be lost.
  - You are about to drop the column `tuesday` on the `days` table. All the data in the column will be lost.
  - You are about to drop the column `wednesday` on the `days` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "days" DROP COLUMN "friday",
DROP COLUMN "monday",
DROP COLUMN "thursday",
DROP COLUMN "tuesday",
DROP COLUMN "wednesday";

-- AlterTable
ALTER TABLE "schedules" ALTER COLUMN "day" SET DATA TYPE TEXT,
ALTER COLUMN "hour" SET DATA TYPE TEXT;
