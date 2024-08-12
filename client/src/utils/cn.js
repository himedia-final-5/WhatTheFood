import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 주어진 클래스 네임을 Tailwind CSS 클래스로 변환합니다.
 *
 * @param {ClassValue[]} inputs
 * @returns {string}
 */
export default function cn(...inputs) {
  return twMerge(clsx(inputs));
}
