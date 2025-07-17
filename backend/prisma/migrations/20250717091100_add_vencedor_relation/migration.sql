/*
  Warnings:

  - You are about to drop the column `equipeAmador1Id` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `equipeAmador2Id` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `equipeOficial1Id` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `equipeOficial2Id` on the `Partida` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Torneio` table. All the data in the column will be lost.
  - You are about to drop the `AtletaEquipeOficial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EquipeAmador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EquipeOficial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ParticipacaoAmador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Treinador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MembrosEquipeAmador` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `equipe1Id` to the `Partida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipe2Id` to the `Partida` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoEquipe" AS ENUM ('individual', 'dupla', 'trio', 'quarteto');

-- DropForeignKey
ALTER TABLE "AtletaEquipeOficial" DROP CONSTRAINT "AtletaEquipeOficial_atletaId_fkey";

-- DropForeignKey
ALTER TABLE "AtletaEquipeOficial" DROP CONSTRAINT "AtletaEquipeOficial_equipeOficialId_fkey";

-- DropForeignKey
ALTER TABLE "EquipeAmador" DROP CONSTRAINT "EquipeAmador_torneioId_fkey";

-- DropForeignKey
ALTER TABLE "EquipeOficial" DROP CONSTRAINT "EquipeOficial_torneioId_fkey";

-- DropForeignKey
ALTER TABLE "ParticipacaoAmador" DROP CONSTRAINT "ParticipacaoAmador_atletaId_fkey";

-- DropForeignKey
ALTER TABLE "ParticipacaoAmador" DROP CONSTRAINT "ParticipacaoAmador_torneioId_fkey";

-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_equipeAmador1Id_fkey";

-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_equipeAmador2Id_fkey";

-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_equipeOficial1Id_fkey";

-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_equipeOficial2Id_fkey";

-- DropForeignKey
ALTER TABLE "Treinador" DROP CONSTRAINT "Treinador_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "_MembrosEquipeAmador" DROP CONSTRAINT "_MembrosEquipeAmador_A_fkey";

-- DropForeignKey
ALTER TABLE "_MembrosEquipeAmador" DROP CONSTRAINT "_MembrosEquipeAmador_B_fkey";

-- AlterTable
ALTER TABLE "Partida" DROP COLUMN "equipeAmador1Id",
DROP COLUMN "equipeAmador2Id",
DROP COLUMN "equipeOficial1Id",
DROP COLUMN "equipeOficial2Id",
ADD COLUMN     "equipe1Id" INTEGER NOT NULL,
ADD COLUMN     "equipe2Id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Torneio" DROP COLUMN "tipo";

-- DropTable
DROP TABLE "AtletaEquipeOficial";

-- DropTable
DROP TABLE "EquipeAmador";

-- DropTable
DROP TABLE "EquipeOficial";

-- DropTable
DROP TABLE "ParticipacaoAmador";

-- DropTable
DROP TABLE "Treinador";

-- DropTable
DROP TABLE "_MembrosEquipeAmador";

-- DropEnum
DROP TYPE "TipoTorneio";

-- CreateTable
CREATE TABLE "Participacao" (
    "id" SERIAL NOT NULL,
    "atletaId" INTEGER NOT NULL,
    "torneioId" INTEGER NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Participacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" "TipoEquipe" NOT NULL,
    "torneioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Equipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipeAtleta" (
    "atletaId" INTEGER NOT NULL,
    "equipeId" INTEGER NOT NULL,

    CONSTRAINT "EquipeAtleta_pkey" PRIMARY KEY ("atletaId","equipeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participacao_atletaId_torneioId_key" ON "Participacao"("atletaId", "torneioId");

-- AddForeignKey
ALTER TABLE "Participacao" ADD CONSTRAINT "Participacao_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participacao" ADD CONSTRAINT "Participacao_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipe" ADD CONSTRAINT "Equipe_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipeAtleta" ADD CONSTRAINT "EquipeAtleta_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipeAtleta" ADD CONSTRAINT "EquipeAtleta_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_equipe1Id_fkey" FOREIGN KEY ("equipe1Id") REFERENCES "Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_equipe2Id_fkey" FOREIGN KEY ("equipe2Id") REFERENCES "Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_vencedorId_fkey" FOREIGN KEY ("vencedorId") REFERENCES "Equipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
