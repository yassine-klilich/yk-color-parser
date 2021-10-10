"use strict";

const ColorConverter = (function() {
	
	const _colorConverter = Object.freeze({
		convertColor: function(color) {
			arguments.length
			if(arguments.length == 0) {
				throw new Error(`COLOR_CONVERT_ERR:: Failed to execute 'convertColor' on 'ColorConverter': 1 argument required, but only 0 present`);
			}

			if(color == undefined) {
				throw new Error("COLOR_CONVERT_ERR:: color is undefined");
			}
		
			if(isString(color) == false) {
				throw new TypeError("COLOR_CONVERT_ERR:: Invalid type, color must be type of string");
			}
		
			color = color.trim();
		
			if(/^(rgb)/i.test(color)) {
				return compileRGB(color);
			}
			if(/^(hsv)/i.test(color)) {
				return compileHSV(color);
			}
			if(/^(hsl)/i.test(color)) {
				return compileHSL(color);
			}
			if(/^(#)/i.test(color)) {
				return compileHEX(color);
			}
		
			throw new Error("COLOR_CONVERT_ERR:: Color is not type of RGB, HSV, HSL or HEX color models");
		}
	})
		
	function compileRGB(color) {
		let red, green, blue;

		if(/^(rgb)\s{0,}\(\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,}\)$/i.test(color) 
			|| /^(rgba)\s{0,}\(\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]|(0\.([0-9]{1,})))\s{0,}\)$/i.test(color)) {
			let splitedValues = color.split(/([0-9]{1,})/);
			red = parseInt(splitedValues[1]);
			green = parseInt(splitedValues[3]);
			blue = parseInt(splitedValues[5]);

			if(red > 255) {
				throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${red} is an invalid red color, it must be an interger between 0 and 255`);
			}
			if(green > 255) {
				throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${green} is an invalid green color, it must be an interger between 0 and 255`);
			}
			if(blue > 255) {
				throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${blue} is an invalid blue color, it must be an interger between 0 and 255`);
			}

			if(/^(rgba)/i.test(color)) {
				let alpha = parseFloat(color.split(",")[3]);

				if(alpha > 1) {
					throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${alpha} is an invalid alpha color, it must be an interger or a float number between 0 and 1`);
				}

				return { red, green, blue, alpha };
			}
			else {
				return { red, green, blue, alpha: 1 };
			}
		}
		else {
			if(/^(rgba)/i.test(color)) {
				throw new SyntaxError(`COLOR_CONVERT_ERR:: '${color}' is an invalid RGBA color value`);
			}
			else {
				throw new SyntaxError(`COLOR_CONVERT_ERR:: '${color}' is an invalid RGB color value`);
			}
		}
	}

	function compileHSV(color) {
		let hue, saturate, value;
		
		if(/^(hsv)\s{0,}\(\s{0,}([0-9]{1,})\s{0,}((deg)|(°)){0,1}\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,}\)$/i.test(color)
			|| /^(hsva)\s{0,}\(\s{0,}([0-9]{1,})\s{0,}((deg)|(°)){0,1}\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,},\s{0,}([0-9]|(0\.([0-9]{1,})))\s{0,}\)$/i.test(color)) {
			let splitedValues = color.split(/([0-9]{1,})/);
			hue = parseInt(splitedValues[1]);
			saturate = parseInt(splitedValues[3]);
			value = parseInt(splitedValues[5]);

			if(hue > 360) {
				throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${hue} is an invalid hue value, it must be an interger between 0 and 360`);
			}
			if(saturate > 100) {
				throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${saturate} is an invalid saturate value, it must be an interger between 0 and 100`);
			}
			if(value > 100) {
				throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${value} is an invalid value value, it must be an interger between 0 and 100`);
			}

			if(/^(hsva)/i.test(color)) {
				let alpha = parseFloat(color.split(",")[3]);

				if(alpha > 1) {
					throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${alpha} is an invalid alpha value, it must be an interger or a float number between 0 and 1`);
				}

				return { hue, saturate, value, alpha };
			}
			else {
				return { hue, saturate, value, alpha: 1 };
			}
		}
		else {
			if(/^(hsva)/i.test(color)) {
				throw new SyntaxError(`COLOR_CONVERT_ERR:: '${color}' is an invalid HSVA color value`);
			}
			else {
				throw new SyntaxError(`COLOR_CONVERT_ERR:: '${color}' is an invalid HSV color value`);
			}
		}
	}

	function compileHSL(color) {
		let hue, saturate, lightness;
		
		if(/^(hsl)\s{0,}\(\s{0,}([0-9]{1,})\s{0,}((deg)|(°)){0,1}\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,}\)$/i.test(color)
			|| /^(hsla)\s{0,}\(\s{0,}([0-9]{1,})\s{0,}((deg)|(°)){0,1}\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,},\s{0,}([0-9]|(0\.([0-9]{1,})))\s{0,}\)$/i.test(color)) {
			let splitedValues = color.split(/([0-9]{1,})/);
			hue = parseInt(splitedValues[1]);
			saturate = parseInt(splitedValues[3]);
			lightness = parseInt(splitedValues[5]);

			if(hue > 360) {
				throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${hue} is an invalid hue value, it must be an interger between 0 and 360`);
			}
			if(saturate > 100) {
				throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${saturate} is an invalid saturate value, it must be an interger between 0 and 100`);
			}
			if(lightness > 100) {
				throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${lightness} is an invalid lightness value, it must be an interger between 0 and 100`);
			}

			if(/^(hsla)/i.test(color)) {
				let alpha = parseFloat(color.split(",")[3]);

				if(alpha > 1) {
					throw new RangeError(`COLOR_CONVERT_ERR:: '${color}' --> ${alpha} is an invalid alpha value, it must be an interger or a float number between 0 and 1`);
				}

				return { hue, saturate, lightness, alpha };
			}
			else {
				return { hue, saturate, lightness, alpha: 1 };
			}
		}
		else {
			if(/^(hsla)/i.test(color)) {
				throw new SyntaxError(`COLOR_CONVERT_ERR:: '${color}' is an invalid HSLA color value`);
			}
			else {
				throw new SyntaxError(`COLOR_CONVERT_ERR:: '${color}' is an invalid HSL color value`);
			}
		}
	}

	function compileHEX(color) {
		let red, green, blue, alpha = "FF";
		
		if(/^#[0-9a-f]{3}$/i.test(color)) {
			const splitColor = color.split(/([0-9a-f]{1})/i);
			red = splitColor[1].toUpperCase();
			green = splitColor[3].toUpperCase();
			blue = splitColor[5].toUpperCase();
			red += red;
			green += green;
			blue += blue;

			return { red, green, blue, alpha };
		}
		if(/^#[0-9a-f]{4}$/i.test(color)) {
			const splitColor = color.split(/([0-9a-f]{1})/i);
			red = splitColor[1].toUpperCase();
			green = splitColor[3].toUpperCase();
			blue = splitColor[5].toUpperCase();
			alpha = splitColor[7].toUpperCase();
			red += red;
			green += green;
			blue += blue;
			alpha += alpha;

			return { red, green, blue, alpha };
		}
		if(/^#[0-9a-f]{6}$/i.test(color)) {
			const splitColor = color.split(/([0-9a-f]{2})/i);
			red = splitColor[1].toUpperCase();
			green = splitColor[3].toUpperCase();
			blue = splitColor[5].toUpperCase();

			return { red, green, blue, alpha };
		}
		if(/^#[0-9a-f]{8}$/i.test(color)) {
			const splitColor = color.split(/([0-9a-f]{2})/i);
			red = splitColor[1].toUpperCase();
			green = splitColor[3].toUpperCase();
			blue = splitColor[5].toUpperCase();
			alpha = splitColor[7].toUpperCase();

			return { red, green, blue, alpha };
		}

		throw new Error(`COLOR_CONVERT_ERR:: '${color}' is an invalid HEX color value`);
	}

	function isString(value) {
		return (typeof(value) == "string" || (value instanceof String));
	}
	
	return _colorConverter;
})()
