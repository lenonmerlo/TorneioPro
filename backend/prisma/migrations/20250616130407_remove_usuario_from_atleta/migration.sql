-- DropForeignKey
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Atleta" ALTER COLUMN "usuarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
