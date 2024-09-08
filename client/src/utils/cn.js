import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 주어진 클래스 네임들을 하나의 클래스 네임으로 변환합니다.
 *
 * - 목적 1) 너무 긴 클래스 네임을 분리하거나 그룹 별로 묶어 가독성을 향상
 * - 목적 2) 조건부 클래스 네임을 가독성을 해치지 않으며 적용
 * - 목적 3) 중복되는 클래스 네임을 자동으로 제거 (tailwind-merge)
 *
 * @param {import("tailwind-merge").ClassNameValue[]} classLists
 * @returns {string}
 */
export default function cn(...classLists) {
  return twMerge(clsx(classLists));
}
