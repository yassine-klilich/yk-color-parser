# YK-Color-Parser
[![Generic badge](https://img.shields.io/badge/version-v1.1.2-green?style=flat-square)](https://www.npmjs.com/package/yk-color-parser)

YK-Color-Parser is a lightweight library to parse string color value to an object, supporting RGB, HSL, HSV and HEX color formats.

# Installation
Install YK-Color-Parser library from the npm command :
```
npm install yk-color-parser
```

### or download the minified file from GitHub and import it using script tag
```html
<script src="./yk-color-parser.min.js"></script> // 16KB
```

## How to use

YK-Color-Parser library contains only one function to parse string color value into an object.
```javascript
import ColorParser from "yk-color-parser";

ColorParser.parse(<color>);
```

## Parse Named Colors

```javascript
ColorParser.parse("red"); // ==> { red: 'FF', green: '00', blue: '00', alpha: 'FF' }

ColorParser.parse("yellow"); // ==> { red: 'FF', green: 'FF', blue: '00', alpha: 'FF' }

ColorParser.parse("  yelLoW  "); // ==> { red: 'FF', green: 'FF', blue: '00', alpha: 'FF' }

ColorParser.parse('blanchedalmond'); // ==> { red: 'FF', green: 'EB', blue: 'CD', alpha: 'FF' }
```

## Parse RGB/RGBA format

```javascript
ColorParser.parse('rgb(120, 4, 64)'); // ==> { red: 120, green: 4, blue: 64, alpha: 1 }

ColorParser.parse('rgba(120, 4, 64, 1)'); // ==> { red: 120, green: 4, blue: 64, alpha: 1 }

ColorParser.parse('rgb(120 4 64)'); // ==> Without comma : { red: 120, green: 4, blue: 64, alpha: 1 }

ColorParser.parse('rgba(120 4 64 0.5)'); // ==> Without comma : { red: 120, green: 4, blue: 64, alpha: 0.5 }
```

## Parse HSV/HSVA format

```javascript
ColorParser.parse('hsv(120deg, 67%, 1%)'); // ==> { hue: 120, saturate: 67, value: 1, alpha: 1 }

ColorParser.parse('hsva(120deg, 67%, 1%, 1)'); // ==> { hue: 120, saturate: 67, value: 1, alpha: 1 }

ColorParser.parse('hsv(120deg 67% 1%)'); // ==> Without comma : { hue: 120, saturate: 67, value: 1, alpha: 1 }

ColorParser.parse('hsva(120deg 67% 1% 0.25)'); // ==> Without comma : { hue: 120, saturate: 67, value: 1, alpha: 0.25 }
```

## Parse HSL/HSLA format

```javascript
ColorParser.parse('hsl(120deg, 67%, 1%)'); // ==> { hue: 120, saturate: 67, lightness: 1, alpha: 1 }

ColorParser.parse('hsla(120deg, 67%, 1%, 1)'); // ==> { hue: 120, saturate: 67, lightness: 1, alpha: 1 }

ColorParser.parse('hsl(120deg 67% 1%)'); // ==> Without comma : { hue: 120, saturate: 67, lightness: 1, alpha: 1 }

ColorParser.parse('hsla(120deg 67% 1% 0.25)'); // ==> Without comma : { hue: 120, saturate: 67, lightness: 1, alpha: 0.25 }
```

## Parse HEX format

```javascript
ColorParser.parse('#45F'); // ==> { red: "44", green: "55", blue: "FF", alpha: "FF" }

ColorParser.parse('#45FE'); // ==> { red: "44", green: "55", blue: "FF", alpha: "EE" }

ColorParser.parse('#45FE88'); // ==> { red: "45", green: "FE", blue: "88", alpha: "FF" }

ColorParser.parse('#45FE882C'); // ==> { red: "45", green: "FE", blue: "88", alpha: "2C" }
```

## License

Licensed under the [MIT License](./LICENSE).