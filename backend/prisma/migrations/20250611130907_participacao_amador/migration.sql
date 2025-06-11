-- CreateTable
CREATE TABLE "ParticipacaoAmador" (
    "id" SERIAL NOT NULL,
    "atletaId" INTEGER NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ParticipacaoAmador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ParticipacaoAmador_atletaId_key" ON "ParticipacaoAmador"("atletaId");

-- AddForeignKey
ALTER TABLE "ParticipacaoAmador" ADD CONSTRAINT "ParticipacaoAmador_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
