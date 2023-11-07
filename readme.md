# Handle URL

A simple JavaScript utility for handling common operations with URLs such as validation, parameter manipulation, and retrieval.

## Features

- Validate URLs to check their correctness.
- Add new query parameters to existing URLs.
- Update values of existing query parameters.
- Retrieve values for a set of query parameters.

## Installation

Include `handleURL.js` in your project to start using the utility.

## Usage


```js
const NOT_REAL_URL = "hola.com";
const URL_WITHOUT_PARAMS = "http://hola.com";
const URL_WITH_PARAMS = "http://hola.com?test=not&id=123456789&user=TioDeLaTiza";

``` js
/* CONSTANTS */
const NOT_REAL_URL = "hola.com";
const URL_WITHOUT_PARAMS = "http://hola.com";
const URL_WITH_PARAMS = "http://hola.com?test=not&id=123456789&user=TioDeLaTiza";
```

## Check if is valid url
``` js
const isNotUrl = handleURL.isValidURL(NOT_REAL_URL); // Is this **hola.com** url?: false
const isUrl = handleURL.isValidURL(URL_WITHOUT_PARAMS);  // Is this **http://hola.com** url?: true
```

## Add new Params
``` js
const addParamUrl = handleURL.set({
    url: URL_WITHOUT_PARAMS,
    dataJson: { location: "9999", name: "MartinezAres" }
});

// Original url **http://hola.com**, Added params: **http://hola.com/?location=9999&name=MartinezAres**
```


## Update params
``` js
const updateParamUrl = handleURL.set({
    url: URL_WITH_PARAMS,
    dataJson: { id: "9999", user: "MartinezAres" }
});
// Original url **http://hola.com?test=not&id=123456789&user=TioDeLaTiza**, updated params: **http://hola.com/?test=not&id=9999&user=MartinezAres**
```

## Get value of array of params
``` js
const getParamsAndValues = handleURL.get({
    url: URL_WITH_PARAMS,
    dataArray: ["id", "user"]
});
// Original url **http://hola.com?test=not&id=123456789&user=TioDeLaTiza**, get params: {id: '123456789', user: 'TioDeLaTiza'}
```


## Author

Handle URL was created by [NandoVejer](https://twitter.com/NANDOVEJER).

## License

Handle URL is open-sourced software licensed under the [MIT license](LICENSE).