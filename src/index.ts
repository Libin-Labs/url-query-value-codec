export function queryValue(input: string, key: string): string | null {
  if (typeof input !== 'string' || typeof key !== 'string')
    throw new TypeError('Expected URL and key text');
  let url: URL;
  try {
    url = new URL(input, 'http://localhost');
  } catch {
    throw new RangeError('Invalid URL reference');
  }
  return url.searchParams.get(key);
}
