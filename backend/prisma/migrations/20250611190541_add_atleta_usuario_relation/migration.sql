/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `Atleta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usuarioId` to the `Atleta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atleta" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Atleta_usuarioId_key" ON "Atleta"("usuarioId");

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
