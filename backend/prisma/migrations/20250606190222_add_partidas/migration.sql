-- CreateTable
CREATE TABLE "Partida" (
    "id" SERIAL NOT NULL,
    "torneioId" INTEGER NOT NULL,
    "equipe1Id" INTEGER NOT NULL,
    "equipe2Id" INTEGER NOT NULL,
    "pontosEquipe1" INTEGER NOT NULL,
    "pontosEquipe2" INTEGER NOT NULL,
    "fase" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Partida_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_equipe1Id_fkey" FOREIGN KEY ("equipe1Id") REFERENCES "Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_equipe2Id_fkey" FOREIGN KEY ("equipe2Id") REFERENCES "Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
