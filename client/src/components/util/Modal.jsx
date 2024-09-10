import { useCallback, useEffect, useRef, useState } from "react";
import cn from "utils/cn";

/**
 * @typedef {object} Props
 * @property {boolean} visible 모달 표시 여부
 * @property {function(false)} onOverlayClick 오버레이 클릭 시 호출되는 함수
 * @property {React.ReactNode} children 자식 노드
 */
/** @type {function(Props): React.JSX.Element} */
export default function Modal({ children, visible, onOverlayClick }) {
  /** @type {React.MutableRefObject<HTMLDivElement>} */
  const modalRef = useRef(null);
  const [closed, setClosed] = useState(true);

  // 오버레이 영역 클릭 시 onOverlayClick 호출
  const handleClickOverlay = useCallback(
    (ev) => {
      if (ev.target === modalRef.current) {
        onOverlayClick?.(false);
      }
    },
    [onOverlayClick],
  );

  // visible 변경 시 closed 상태 변경
  useEffect(() => {
    if (visible) {
      setClosed(false);
    }
  }, [visible]);

  return closed ? (
    <></>
  ) : (
    <div
      aria-label="modal-wrapper"
      className={cn(
        "fixed flex items-center justify-center inset-0 z-50 w-full h-full m-0",
        "bg-white transition-[background-color_backdrop-filter] animate-ease-spring,",
        visible
          ? "animate-fade-in bg-opacity-5 backdrop-blur-sm"
          : "animate-fade-out bg-opacity-0 backdrop-blur-none",
      )}
    >
      <div
        aria-label="modal"
        ref={modalRef}
        className={cn(
          "flex items-center justify-center w-full h-full m-0 animate-ease-spring",
          visible ? "animate-pop-up-in" : "animate-pop-up-out",
        )}
        onClick={handleClickOverlay}
        onAnimationEnd={({ animationName }) => {
          if (animationName === "pop-up-out") {
            setClosed(true);
          }
        }}
      >
        {children}
      </div>
    </div>
  );
}
