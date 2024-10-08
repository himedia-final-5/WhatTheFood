import { lazy, Suspense } from "react";

/**
 * 지연 로딩 컴포넌트를 `<Suspense>` 컴포넌트로 감싸서 반환
 *
 * - 목적 1) 컴포넌트를 동적으로 불러오는 것을 지연
 * - 목적 2) 컴포넌트가 로딩되는 동안 로딩 상태를 표시
 *
 * @template {React.ComponentType<any>} T - 동적으로 불러올 컴포넌트의 타입
 * @param {() => Promise<{ default:  T }>} imports - 동적으로 불러올 컴포넌트
 * @param {React.ReactNode} fallback - 로딩 중 표시할 컴포넌트
 * @returns {React.LazyExoticComponent<T>} - 지연 로딩된 컴포넌트
 */
export default function lazyLoading(imports, fallback = <></>) {
  const LazyComponent = lazy(imports);
  return (props) => {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props}></LazyComponent>
      </Suspense>
    );
  };
}
