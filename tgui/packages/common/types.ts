/**
 * Returns the arguments of a function F as an array.
 */
// prettier-ignore
export type ArgumentsOf<F extends Function>
  = F extends (...args: infer A) => unknown ? A : never;

/**
 * A function. Use this instead of `Function` to avoid issues with
 * type inference.
 */
export type Fn = (...args: any[]) => void;
