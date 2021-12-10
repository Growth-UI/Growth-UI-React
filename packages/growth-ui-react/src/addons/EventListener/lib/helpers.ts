import React from 'react';
import { EventListeners, GenericMap, InputEventListener, InputTargetElement, TargetElement } from '../types';

export function cloneMap<T>(map: GenericMap<T>): GenericMap<T> {
  const newMap = new Map();

  map.forEach((value, key) => {
    newMap.set(key, value);
  });

  return newMap;
}

export function normalizeHandlers(handlers: InputEventListener): EventListeners {
  return Array.isArray(handlers) ? handlers : [handlers];
}

export const isRefObject = <T>(ref: any): ref is React.RefObject<T> =>
  // eslint-disable-next-line
  ref !== null && typeof ref === 'object' && ref.hasOwnProperty('current');

export function normalizeTarget(target: InputTargetElement): TargetElement {
  if (target === 'document') return document;
  if (target === 'window') return window;
  if (isRefObject(target)) return target.current || document;

  return (target as HTMLElement) || document;
}
