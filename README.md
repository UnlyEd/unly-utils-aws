# unly-utils-aws

This project is a transversal project, tools to help and improve aws development

Install:

npm or yarn

```
    npm install https://github.com/UnlyEd/unly-aws-utils.git
```

Use:

```
import { isHostedOnAws } from 'unly-utils-aws';

or

import isHostedOnAws from 'unly-aws-utils/lib';
```

### Library:


#### headers
|   | param(s)         |  |
| :--------------- |:---------------:| :-----------------------:|
| getDevice|    headers      | Extract forwarded IP addresses from string, provided using "X-Forwarded-For" header.|
| getMainIpAddress  | xForwardedFor, separator | Extract main IP address from string, provided using "X-Forwarded-For" header. |
| getForwardedIpAddresses  | xForwardedFor, separator | Extract forwarded IP addresses from string, provided using "X-Forwarded-For" header. |
| getHeadersUsefulData  | headers | Extract interesting data from an event headers, typically for tracking/storing for further analytics capabilities. |

#### APIResponse
|   | param(s)         |  |
| :--------------- |:---------------:| :-----------------------:|
| success |    headers      | return statusCode, data and headers |
| failure  | xForwardedFor, separator | return statusCode, data and headers |
| redirect | xForwardedFor, separator | return statusCode, data and headers |
| unauthorized | headers | return statusCode, data and headers |
| buildJSONResponse | statusCode, body, headers | return data and headers |
| buildCSVResponse | object { data, statusCode, filename, charset } | return statusCode, headers, and CSV File |

### Helpers:

|   | param(s)         | return |
:---------------:| :-----------------------:| :-----------------------:|
|   isHostedOnAws  |  | Boolean |


## Development

### Test

Run once:
```
yarn run test:once
```

Watch:
```
yarn test
```

Coverage:
```
yarn run test:coverage
```

### Lint

```
yarn run lint
```
