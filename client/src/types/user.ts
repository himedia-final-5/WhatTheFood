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

declare type MemberDetail = {
  id: number;
  username: string;
  nickname: string;
  role: Role;
  profileImage: string;
  bannerImage: string;
  introduce: string;
  socialUrls: {
    name: string;
    url: string;
  };
};
