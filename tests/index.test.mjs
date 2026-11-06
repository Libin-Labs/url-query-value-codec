import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('reads query value', () => {
  assert.equal(api.queryValue('https://x.test/?a=1', 'a'), '1');
});
test('decodes percent encoding', () => {
  assert.equal(api.queryValue('/?q=hello%20world', 'q'), 'hello world');
});
test('returns first duplicate', () => {
  assert.equal(api.queryValue('/?x=1&x=2', 'x'), '1');
});
test('returns null when missing', () => {
  assert.equal(api.queryValue('/?a=1', 'b'), null);
});
test('supports empty value', () => {
  assert.equal(api.queryValue('/?x=', 'x'), '');
});
test('rejects non-string key', () => {
  assert.throws(() => api.queryValue('/', 2), TypeError);
});
