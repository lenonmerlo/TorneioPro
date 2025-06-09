-- CreateEnum
CREATE TYPE "StatusTorneio" AS ENUM ('aberto', 'fechado', 'encerrado');

-- CreateEnum
CREATE TYPE "TipoTorneio" AS ENUM ('amador', 'oficial');

-- CreateTable
CREATE TABLE "Torneio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" "TipoTorneio" NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT,
    "status" "StatusTorneio" NOT NULL DEFAULT 'aberto',
    "criadoPorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Torneio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Torneio" ADD CONSTRAINT "Torneio_criadoPorId_fkey" FOREIGN KEY ("criadoPorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
