# medium-fetcher

[![code style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg?style=flat-square)][code style]
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)][standard-version]

**medium-fetcher** provides a simple interface to get user and post data from medium

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Helpers/Tools](#helperstools)

## Install

```shell
yarn add medium-fetcher
```

or

```shell
npm install -S medium-fetcher
```

## Usage

```js
import medium from 'medium-fetcher'

// to fetch a user
const username = 'uesteibar'
medium.fetchUser({ username }).then(
  (user) => console.log({ user })
)
```

## Contributing

The project uses [`standard-version`][standard-version] to update the [CHANGELOG][] with each commit message and upgrade the package version. For that reason every contribution should have a title and body that follows the [conventional-changelog-standard][] conventions.

So this is a step by step guide to contributing to the project (mostly extracted from the [`standard-version`][standard-version] docs):

1. when you land commits on your `master` branch, select the _Squash and Merge_ option.
2. add a title and body that follows the [conventional-changelog-standard conventions][conventional-changelog-standard].
3. when you're ready to release to npm:
  1. `git checkout master; git pull origin master`
  2. run `npm run release`

## Helpers/Tools

- [commitzen][]: A cli that will prompt the author to fill out any required commit fields at commit time. For this project we would use the [cz-conventional-changelog][] adapter.

[CHANGELOG]: https://source.xing.com/360/360-sidebar/blob/master/CHANGELOG.md
[code style]: https://npm.im/prettier
[commitzen]: https://github.com/commitizen/cz-cli
[conventional-changelog]: https://github.com/conventional-changelog/conventional-changelog
[conventional-changelog-standard]: https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md
[cz-conventional-changelog]: https://github.com/commitizen/cz-conventional-changelog
[standard-version]: https://github.com/conventional-changelog/standard-version
