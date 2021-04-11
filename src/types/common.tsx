/**
 * Common TS Types
 */
import { DependencyList, EffectCallback } from 'react';

export type CreateUseEffect<TArgs = never> = (args: TArgs) => [EffectCallback, DependencyList];
