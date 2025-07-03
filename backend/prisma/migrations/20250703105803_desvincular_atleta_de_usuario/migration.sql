/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `Atleta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_usuarioId_fkey";

-- DropIndex
DROP INDEX "Atleta_usuarioId_key";

-- AlterTable
ALTER TABLE "Atleta" DROP COLUMN "usuarioId";
