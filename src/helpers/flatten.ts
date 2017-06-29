/**
 * flatten helper module.
 * @module csam/helpers/flatten
 */

/**
 * Flattens an array by recursively flattening all elements.
 * @param {any[]} a - The (nested) array
 */
export function flatten(a: any[]): any[] {
  let arr: any[] = [];
  for (const e of a) {
    if (e instanceof Array) {
      arr = arr.concat(flatten(e));
    } else {
      arr.push(e);
    }
  }
  return arr;
}
