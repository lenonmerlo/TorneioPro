-- CreateTable
CREATE TABLE "EquipeOficial" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EquipeOficial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtletaOficial" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "equipeId" INTEGER NOT NULL,

    CONSTRAINT "AtletaOficial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AtletaOficial" ADD CONSTRAINT "AtletaOficial_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "EquipeOficial"("id") ON DELETE CASCADE ON UPDATE CASCADE;
