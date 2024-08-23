/* eslint-disable @typescript-eslint/no-unused-vars */

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

declare type MemberProfileDetail = {
  id: number;
  nickname: string;
  introduce: string;
  profileImage: string;
  bannerImage: string;
  followerCount: number;
  followingCount: number;
  viewCount: number;
  following: boolean;
};

declare type MemberProfileSummary = {
  id: number;
  nickname: string;
  profileImage: string;
  following: boolean;
};
