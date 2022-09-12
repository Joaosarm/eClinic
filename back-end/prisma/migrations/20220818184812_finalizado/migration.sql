-- AlterTable
ALTER TABLE "days" ADD COLUMN     "friday" BOOLEAN DEFAULT false,
ADD COLUMN     "monday" BOOLEAN DEFAULT false,
ADD COLUMN     "thursday" BOOLEAN DEFAULT false,
ADD COLUMN     "tuesday" BOOLEAN DEFAULT false,
ADD COLUMN     "wednesday" BOOLEAN DEFAULT false;
