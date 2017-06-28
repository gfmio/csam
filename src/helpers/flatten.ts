/**
 * flatten helper module.
 * @module csam/helpers/flatten
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
