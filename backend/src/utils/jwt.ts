import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'evpc-secret';

export function gerarToken(payload: object): string {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' });
}

export function verificarToken(token: string): any {
  return jwt.verify(token, SECRET);
}
