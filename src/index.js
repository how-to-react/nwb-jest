
export function mapToArray(map) {
  return Object.keys(map).map(k => map[k]);
}

export function mapObject(object, fn) {
  return mapToArray(object).map(fn);
}