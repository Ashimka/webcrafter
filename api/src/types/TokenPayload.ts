export type TokenPayload = {
  login: string;
  role: string;
};

export type DecodedToken = {
  login: string;
  role: string;
  iat: number;
  exp: number;
};
