/*
  Warnings:

  - Added the required column `emplid` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grado` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emplid" TEXT NOT NULL,
ADD COLUMN     "grado" TEXT NOT NULL;
