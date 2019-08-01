# The Travelers

> Project description

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API
### get request
```
/api/listing/:listingid/reviews
```
### post request
```
/api/reviews/:listingid {user_id: INT NOT NULL, content: text}
```
### update request
```
/api/reviews/:listingid {user_id: INT NOT NULL, content: text}
```
### delete request
```
/api/listing/:listingid
```

