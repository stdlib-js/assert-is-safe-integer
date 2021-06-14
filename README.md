<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isSafeInteger

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is a number having a safe integer value.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-safe-integer
```

</section>

<section class="usage">

## Usage

```javascript
var isSafeInteger = require( '@stdlib/assert-is-safe-integer' );
```

#### isSafeInteger( value )

Tests if a value is a `number` having a safe `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isSafeInteger( 5.0 );
// returns true

bool = isSafeInteger( new Number( 5.0 ) );
// returns true

bool = isSafeInteger( 2.0e200 );
// returns false

bool = isSafeInteger( -3.14 );
// returns false

bool = isSafeInteger( null );
// returns false
```

#### isSafeInteger.isPrimitive( value )

Tests if a `value` is a primitive `number` having a safe `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isSafeInteger.isPrimitive( -3.0 );
// returns true

bool = isSafeInteger.isPrimitive( new Number( -3.0 ) );
// returns false
```

#### isSafeInteger.isObject( value )

Tests if a `value` is a `Number` object having a safe `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isSafeInteger.isObject( 3.0 );
// returns false

bool = isSafeInteger.isObject( new Number( 3.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An integer valued number is "safe" when the number can be exactly represented as a [double-precision floating-point number][ieee754]. For example,

    ```javascript
    var MAX_SAFE_INTEGER = require( '@stdlib/constants-float64-max-safe-integer' );
    // returns 9007199254740991

    var x = 9007199254740992;
    // returns 9007199254740992

    var y = 9007199254740993;
    // returns 9007199254740992

    var bool = ( x === y );
    // returns true
    ```

    In this example, `x` and `y` should be distinct, but they are not due to constraints imposed by storing numeric values in [double-precision floating-point format][ieee754]. "Safe" integers are thus [double-precision floating-point numbers][ieee754] having integer values with unequivocal binary representations.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number-ctor' );
var isSafeInteger = require( '@stdlib/assert-is-safe-integer' );

var bool = isSafeInteger( -5.0 );
// returns true

bool = isSafeInteger( 0.0 );
// returns true

bool = isSafeInteger( new Number( 5.0 ) );
// returns true

bool = isSafeInteger( 2.0e200 );
// returns false

bool = isSafeInteger( 5.256 );
// returns false

bool = isSafeInteger( 1.0/0.0 );
// returns false

bool = isSafeInteger( -1.0/0.0 );
// returns false

bool = isSafeInteger( NaN );
// returns false

bool = isSafeInteger( '5' );
// returns false

bool = isSafeInteger( null );
// returns false
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-safe-integer.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-safe-integer

[test-image]: https://github.com/stdlib-js/assert-is-safe-integer/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-safe-integer/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-safe-integer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-safe-integer?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-safe-integer
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-safe-integer/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-safe-integer/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
