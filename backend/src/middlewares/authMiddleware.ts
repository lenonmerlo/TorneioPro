import { Request, Response, NextFunction } from 'express';
import { verificarToken } from '../utils/jwt';

// Define a interface para o payload do token JWT
interface JwtPayload {
  id: number;
  perfil: string;
  // Adicione quaisquer outras propriedades que você inclua no payload do token
}

// Estende a interface Request do Express para incluir a propriedade 'user'
// com a tipagem específica do nosso payload JWT
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload; // Agora req.user será tipado com a interface JwtPayload
    }
  }
}

// Função middleware para autenticação de token JWT
export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  // 1. Verifica se o cabeçalho de autorização existe e tem o formato correto (Bearer <token>)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ erro: 'Token de autenticação não fornecido ou formato inválido (ex: Bearer TOKEN_AQUI).' });
    return; // Importante parar a execução aqui
  }

  // 2. Extrai o token da string 'Bearer <token>'
  const token = authHeader.split(' ')[1];

  // 3. Tenta verificar o token usando a função do seu jwt.ts
  try {
    const decoded = verificarToken(token) as JwtPayload; // Força a tipagem do retorno
    req.user = decoded; // Anexa o payload decodificado (id e perfil) à requisição
    next(); // Continua para a próxima função middleware ou rota
  } catch (error: any) {
    // 4. Lida com erros de verificação do token (expirado, inválido, etc.)
    console.error('Erro na verificação do token JWT:', error.message); // Log para depuração no servidor
    res.status(403).json({ erro: 'Token de autenticação inválido ou expirado.' });
    return; // Importante parar a execução aqui
  }
};