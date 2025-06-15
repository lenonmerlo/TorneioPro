import { Request, Response, NextFunction } from 'express';
import { verificarToken } from '../utils/jwt';

// Middleware de autenticação JWT
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  // 1. Verifica se existe o cabeçalho e se está no formato correto
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ erro: 'Token ausente ou em formato inválido. Use: Bearer <token>' });
    return;
  }

  // 2. Extrai o token da string "Bearer <token>"
  const token = authHeader.split(' ')[1];

  try {
    // 3. Verifica e decodifica o token
    const decoded = verificarToken(token);

    // 4. Anexa o usuário ao request (tipado globalmente)
    req.user = {
      id: decoded.id,
      perfil: decoded.perfil,
    };

    next();
  } catch (error: any) {
    console.error('Erro ao verificar token:', error.message);
    res.status(403).json({ erro: 'Token inválido ou expirado.' });
  }
};
