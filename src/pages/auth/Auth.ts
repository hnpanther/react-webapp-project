import { jwtDecode } from "jwt-decode";

export interface JwtPayload {
  iss: string;
  upn: string;
  groups: string[];
  jti: string;
  iat: number;
  exp: number;
}

export const getToken = (): string | null => {
  return localStorage.getItem("authWebToken");
};

export const decodeToken = (): JwtPayload | null => {
  const token = getToken();
  if (!token) return null;

  try {
    return jwtDecode<JwtPayload>(token);
  } catch {
    console.log("can't decode token!")
    return null;
  }
};

export const isTokenExpired = (): boolean => {
  const payload = decodeToken();
  if (!payload) return true;

  const now = Date.now() / 1000; // seconds
  const check = payload.exp < now;
  console.log("token expired? " + check);
  return check;
};

export const logout = () => {
  localStorage.removeItem("authWebToken");
};