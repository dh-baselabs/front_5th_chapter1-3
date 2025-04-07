import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef.ts";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  _equals = shallowEquals,
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.

  const memoRef = useRef<{ _deps: DependencyList; value: T } | null>(null);

  if (memoRef.current === null || !_equals(memoRef.current._deps, _deps)) {
    memoRef.current = {
      _deps: _deps,
      value: factory(),
    };
  }
  return memoRef.current.value;
}
