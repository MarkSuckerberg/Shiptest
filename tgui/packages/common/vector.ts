/**
 * N-dimensional vector manipulation functions.
 *
 * Vectors are plain number arrays, i.e. [x, y, z].
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { map, reduce, zipWith } from './collections';

const ADD = (a: number, b: number) => a + b;
const SUB = (a: number, b: number) => a - b;
const MUL = (a: number, b: number) => a * b;
const DIV = (a: number, b: number) => a / b;

/** Represents a vector as an array of numbers */
export type Vector = number[];

export const vecAdd = (...vecs: Vector[]) => {
  return reduce<Vector>((a, b) => zipWith(ADD)(a, b))(vecs);
};

export const vecSubtract = (...vecs: Vector[]) => {
  return reduce<Vector>((a, b) => zipWith(SUB)(a, b))(vecs);
};

export const vecMultiply = (...vecs: Vector[]) => {
  return reduce<Vector>((a, b) => zipWith(MUL)(a, b))(vecs);
};

export const vecDivide = (...vecs: Vector[]) => {
  return reduce<Vector>((a, b) => zipWith(DIV)(a, b))(vecs);
};

export const vecScale = (vec: Vector, n: number) => {
  return map((x: number) => x * n)(vec);
};

export const vecInverse = (vec: Vector) => {
  return map((x: number) => -x)(vec);
};

export const vecLength = (vec: Vector) => {
  return Math.sqrt(reduce(ADD)(zipWith(MUL)(vec, vec)));
};

export const vecNormalize = (vec: Vector) => {
  const length = vecLength(vec);
  return map((c: number) => c / length)(vec);
};
