[![Build Status](https://travis-ci.com/UnlyEd/utils-aws.svg?branch=master)](https://travis-ci.com/UnlyEd/utils-aws)
[![Maintainability](https://api.codeclimate.com/v1/badges/d6bf5bfc40cdabba8241/maintainability)](https://codeclimate.com/github/UnlyEd/utils-aws/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d6bf5bfc40cdabba8241/test_coverage)](https://codeclimate.com/github/UnlyEd/utils-aws/test_coverage)

# Utils Aws

This project is a transversal project, tools to help and improve aws development

<!-- toc -->

- [Getting started](#getting-started)
- [API](#api)
- [Contributing](#contributing)
  * [Getting started](#getting-started-1)
  * [Test](#test)
  * [Releasing and publishing](#releasing-and-publishing)
- [License](#license)

<!-- tocstop -->

## Getting started

npm or yarn

```
  npm install @unly/utils-aws
```

Use:

```
import { isHostedOnAws } from 'utils-aws';

or

import isHostedOnAws from 'utils-aws/lib';
```

## API

[API](./API.md)

---

## Contributing

We gladly accept PRs, but please open an issue first so we can discuss it beforehand.

### Getting started

```
yarn start # Shortcut - Runs linter + build + tests in concurrent mode (watch mode)

OR run each process separately for finer control

yarn lint
yarn build
yarn test
```

### Test

```
yarn test # Run all tests, interactive and watch mode
yarn test:once
yarn test:coverage
```

### Releasing and publishing

```
yarn releaseAndPublish # Shortcut - Will prompt for bump version, commit, create git tag, push commit/tag and publish to NPM

yarn release # Will prompt for bump version, commit, create git tag, push commit/tag
npm publish # Will publish to NPM
```

## License

MIT
