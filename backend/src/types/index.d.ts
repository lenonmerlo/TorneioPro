// src/types/express/index.d.ts
import { Usuario } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      user?: Pick<Usuario, 'id' | 'perfil'>;
    }
  }
}
export {};