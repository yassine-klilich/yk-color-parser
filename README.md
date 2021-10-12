# YK-Color-Parser
[![Generic badge](https://img.shields.io/badge/version-v1.0.0-green?style=flat-square)](https://www.npmjs.com/package/yk-color-parser)

YK-Color-Parser is a lightweight library to parse string color value to an object, supporting RGB, HSL, HSV and HEX color formats.

# Installation
Install YK-Color-Parser library from the npm command :
```
npm install yk-color-parser
```

### or download the files and import it using script tag
```
<script src="./yk-color-parser.js"></script> // 25KB
or
<script src="./yk-color-parser.min.js"></script> // 15KB
```

## How to use

YK-Color-Parser library contains only one function to parse string color value into an object.
```
ColorParser.parse(<color>);
```

## Parse Named Colors

```
ColorParser.parse("red"); // ==> { red: 'FF', green: '00', blue: '00', alpha: 'FF' }

ColorParser.parse("yellow"); // ==> { red: 'FF', green: 'FF', blue: '00', alpha: 'FF' }

ColorParser.parse("  yelLoW  "); // ==> { red: 'FF', green: 'FF', blue: '00', alpha: 'FF' }

ColorParser.parse('blanchedalmond'); // ==> { red: 'FF', green: 'EB', blue: 'CD', alpha: 'FF' }
```

## Parse RGB/RGBA format

```
ColorParser.parse('rgb(120, 4, 64)'); // ==> { red: 120, green: 4, blue: 64, alpha: 1 }

ColorParser.parse('rgba(120, 4, 64, 1)'); // ==> { red: 120, green: 4, blue: 64, alpha: 1 }

ColorParser.parse('rgba(120, 4, 64, 0.5)'); // ==> { red: 120, green: 4, blue: 64, alpha: 0.5 }

ColorParser.parse('rgb(120 4 64)'); // :warning: Error comma is required for separation 
```

## Parse HSV/HSVA format

```
ColorParser.parse('hsv(120deg, 67%, 1%)'); // ==> { hue: 120, saturate: 67, value: 1, alpha: 1 }

ColorParser.parse('hsva(120deg, 67%, 1%, 1)'); // ==> { hue: 120, saturate: 67, value: 1, alpha: 1 }

ColorParser.parse('hsva(120deg, 67%, 1%, 0.25)'); // ==> { hue: 120, saturate: 67, value: 1, alpha: 0.25 }

ColorParser.parse('hsva(120deg 67% 1% 1)'); // :warning: Error comma is required for separation 
```

## Parse HSL/HSLA format

```
ColorParser.parse('hsl(120deg, 67%, 1%)'); // ==> { hue: 120, saturate: 67, lightness: 1, alpha: 1 }

ColorParser.parse('hsla(120deg, 67%, 1%, 1)'); // ==> { hue: 120, saturate: 67, lightness: 1, alpha: 1 }

ColorParser.parse('hsla(120deg, 67%, 1%, 0.25)'); // ==> { hue: 120, saturate: 67, lightness: 1, alpha: 0.25 }

ColorParser.parse('hsla(120deg 67% 1% 1)'); // :warning: Error comma is required for separation 
```

## Parse HEX format

```
ColorParser.parse('#45F'); // ==> { red: "44", green: "55", blue: "FF", alpha: "FF" }

ColorParser.parse('#45FE'); // ==> { red: "44", green: "55", blue: "FF", alpha: "EE" }

ColorParser.parse('#45FE88'); // ==> { red: "45", green: "FE", blue: "88", alpha: "FF" }

ColorParser.parse('#45FE882C'); // ==> { red: "45", green: "FE", blue: "88", alpha: "2C" }
```

## License

Licensed under the [MIT License](./LICENSE).