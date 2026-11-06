import * as api from '@lp-labs/url-query-value-codec';
import { queryValue } from '@lp-labs/url-query-value-codec';
console.log(queryValue('https://example.com/?q=hello', 'q'));
// @ts-expect-error invalid argument must be rejected by declarations
api.queryValue('/', 2);
