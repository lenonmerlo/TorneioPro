/*
  Warnings:

  - You are about to drop the column `equipeId` on the `Atleta` table. All the data in the column will be lost.
  - You are about to drop the column `equipe1Id` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `equipe2Id` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the `AtletaOficial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Equipe` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[atletaId,torneioId]` on the table `ParticipacaoAmador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `torneioId` to the `EquipeOficial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `torneioId` to the `ParticipacaoAmador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Partida` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_equipeId_fkey";

-- DropForeignKey
ALTER TABLE "AtletaOficial" DROP CONSTRAINT "AtletaOficial_equipeId_fkey";

-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_equipe1Id_fkey";

-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_equipe2Id_fkey";

-- DropIndex
DROP INDEX "ParticipacaoAmador_atletaId_key";

-- AlterTable
ALTER TABLE "Atleta" DROP COLUMN "equipeId";

-- AlterTable
ALTER TABLE "EquipeOficial" ADD COLUMN     "torneioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ParticipacaoAmador" ADD COLUMN     "torneioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Partida" DROP COLUMN "equipe1Id",
DROP COLUMN "equipe2Id",
ADD COLUMN     "equipeAmador1Id" INTEGER,
ADD COLUMN     "equipeAmador2Id" INTEGER,
ADD COLUMN     "equipeOficial1Id" INTEGER,
ADD COLUMN     "equipeOficial2Id" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vencedorId" INTEGER,
ALTER COLUMN "pontosEquipe1" DROP NOT NULL,
ALTER COLUMN "pontosEquipe2" DROP NOT NULL;

-- DropTable
DROP TABLE "AtletaOficial";

-- DropTable
DROP TABLE "Equipe";

-- CreateTable
CREATE TABLE "EquipeAmador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "torneioId" INTEGER NOT NULL,

    CONSTRAINT "EquipeAmador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtletaEquipeOficial" (
    "atletaId" INTEGER NOT NULL,
    "equipeOficialId" INTEGER NOT NULL,

    CONSTRAINT "AtletaEquipeOficial_pkey" PRIMARY KEY ("atletaId","equipeOficialId")
);

-- CreateTable
CREATE TABLE "_MembrosEquipeAmador" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MembrosEquipeAmador_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MembrosEquipeAmador_B_index" ON "_MembrosEquipeAmador"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipacaoAmador_atletaId_torneioId_key" ON "ParticipacaoAmador"("atletaId", "torneioId");

-- AddForeignKey
ALTER TABLE "ParticipacaoAmador" ADD CONSTRAINT "ParticipacaoAmador_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipeAmador" ADD CONSTRAINT "EquipeAmador_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipeOficial" ADD CONSTRAINT "EquipeOficial_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtletaEquipeOficial" ADD CONSTRAINT "AtletaEquipeOficial_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtletaEquipeOficial" ADD CONSTRAINT "AtletaEquipeOficial_equipeOficialId_fkey" FOREIGN KEY ("equipeOficialId") REFERENCES "EquipeOficial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_equipeAmador1Id_fkey" FOREIGN KEY ("equipeAmador1Id") REFERENCES "EquipeAmador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_equipeAmador2Id_fkey" FOREIGN KEY ("equipeAmador2Id") REFERENCES "EquipeAmador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_equipeOficial1Id_fkey" FOREIGN KEY ("equipeOficial1Id") REFERENCES "EquipeOficial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_equipeOficial2Id_fkey" FOREIGN KEY ("equipeOficial2Id") REFERENCES "EquipeOficial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MembrosEquipeAmador" ADD CONSTRAINT "_MembrosEquipeAmador_A_fkey" FOREIGN KEY ("A") REFERENCES "Atleta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MembrosEquipeAmador" ADD CONSTRAINT "_MembrosEquipeAmador_B_fkey" FOREIGN KEY ("B") REFERENCES "EquipeAmador"("id") ON DELETE CASCADE ON UPDATE CASCADE;
