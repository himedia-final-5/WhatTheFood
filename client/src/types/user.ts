declare type Role =
  | "ROLE_GHEST"
  | "ROLE_USER"
  | "ROLE_CHEF"
  | "ROLE_BRAND"
  | "ROLE_ADMIN";

declare type User = {
  id: number;
  username: string;
  nickname: string;
  role: Role;
  accessToken: string;
  refreshToken: string;
};
