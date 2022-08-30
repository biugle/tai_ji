/*
 * @Author: HxB
 * @Date: 2022-08-29 17:12:11
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-30 11:39:03
 * @Description: useInterval 自定义 hooks
 * @FilePath: \react_micro_web\src\_custom\hooks\useInterval.ts
 */
import { useEffect } from 'react';
import useLatest from './useLatest';

const useInterval = (fn: () => void, delay?: number, immediate?: boolean): void => {
  const fnRef = useLatest(fn);

  useEffect(() => {
    if (!delay || delay < 0) return;
    if (immediate) fnRef.current();

    const timer = setInterval(() => {
      fnRef.current();
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [delay]);
};

export default useInterval;
