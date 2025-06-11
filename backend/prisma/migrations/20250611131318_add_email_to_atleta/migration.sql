/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Atleta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Atleta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atleta" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Atleta_email_key" ON "Atleta"("email");
