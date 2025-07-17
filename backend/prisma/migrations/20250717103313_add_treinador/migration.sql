-- CreateTable
CREATE TABLE "Treinador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Treinador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Treinador_usuarioId_key" ON "Treinador"("usuarioId");

-- AddForeignKey
ALTER TABLE "Treinador" ADD CONSTRAINT "Treinador_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
