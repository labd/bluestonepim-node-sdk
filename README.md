# BluestonePIM SDK

This SDK provides methods to interact with the BluestonePIM API. It includes methods to retrieve differences in products
and relations during synchronization operations.

## Installation

To install the SDK, use npm:

```sh
# Using npm
npm install @labdigital/bluestonepim-sdk

# Using yarn
yarn add @labdigital/bluestonepim-sdk

# Using pnpm
pnpm add @labdigital/bluestonepim-sdk
```

## Usage

```typescript
import {DifferencesApi, Configuration} from '@labdigital/bluestonepim-sdk';

const config = new Configuration({
    apiKey: 'your-api-key-here',
    basePath: 'https://api.test.bluestonepim.com/v1',
});

const differencesApi = new DifferencesApi(config);

const requestParameters = {
    id: 'sync-id',
    diffType: 'type',
    itemsOnPage: 10,
    pageNo: 1,
};

const productDifferences = await differencesApi.getProductDifferencesOnSyncDeletes(requestParameters);
console.log(productDifferences);
```

### Retrying requests

The Bluestone PIM API may return a 429 status code when the rate limit is exceeded. To handle this, you can use the 
`retry` function from the `fetch-retry` package. This function will retry the request a number of times with a delay 
between each attempt.

```sh
# Using npm
npm install fetch-retry isomorphic-fetch

# Using yarn
yarn add fetch-retry isomorphic-fetch

# Using pnpm
pnpm add fetch-retry isomorphic-fetch
```

```typescript
const config = new Configuration({
    fetchApi: retry(fetch, {
        retries: 5, //Retry 5 times
        retryDelay: 1000, //Retry after 1 second
        retryOn: (attempt: number, error, response: Response | null): boolean => {
            // Only retry when 429 is hit, otherwise we continue
            if (response != null && response.status === 429) {
                logger.debug({
                    msg: "Retrying Bluestone PIM request",
                    attempt: attempt,
                    responseStatus: response.status,
                });
                return true;
            }
            return false;
        },
    }),
    // Your other configuration options
});
```

## Development

To regenerate the SDK, run the following command:

```sh
pnpm run sdk:generate
```

This will generate the SDK in the `src` directory.