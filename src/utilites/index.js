export function createOptionsObject(arr) {
  return arr.reduce((acc, value) => ({ ...acc, [value]: value }), {})
}
