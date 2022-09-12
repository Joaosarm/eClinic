/*
  Warnings:

  - You are about to drop the column `scheduledTime` on the `schedules` table. All the data in the column will be lost.
  - Added the required column `day` to the `schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `schedules` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "schedules_scheduledTime_key";

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "scheduledTime",
ADD COLUMN     "day" DATE NOT NULL,
ADD COLUMN     "hour" TIME(6) NOT NULL;
