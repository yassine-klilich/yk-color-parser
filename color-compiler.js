"use strict";

function isString(value) {
   return (typeof(value) == "string" || (value instanceof String));
}

function colorCompiler(color) {
   if(color == undefined) {
      throw new Error("COMPILER_ERR:: color is undefined");
   }

   if(isString(color) == false) {
      throw new TypeError("COMPILER_ERR:: Invalid type, color must be type of string");
   }

   let _color = color.trim();

   if(/^(rgb)/i.test(_color)) {
      return compileRgb(_color);
   }
   if(/^(hsv)/i.test(_color)) {
      return compileHsv(_color);
   }
   if(/^(hsl)/i.test(_color)) {

   }
   if(/^(#)/i.test(_color)) {

   }

   throw new Error("COMPILER_ERR:: Color is not type of RGB, HSV, HSL or HEX color models");
}


function compileRgb(rgbColor) {
   let red, green, blue;

   if(/^(rgb)\s{0,}\(\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,}\)$/i.test(rgbColor) 
      || /^(rgba)\s{0,}\(\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]|(0\.([0-9]{1,})))\s{0,}\)$/i.test(rgbColor)) {
      let splitedValues = rgbColor.split(/([0-9]{1,})/);
      red = parseInt(splitedValues[1]);
      green = parseInt(splitedValues[3]);
      blue = parseInt(splitedValues[5]);

      if(red > 255) {
         throw new RangeError(`COMPILER_ERR:: '${rgbColor}' --> ${red} is an invalid red color, it must be an interger between 0 and 255`);
      }
      if(green > 255) {
         throw new RangeError(`COMPILER_ERR:: '${rgbColor}' --> ${green} is an invalid green color, it must be an interger between 0 and 255`);
      }
      if(blue > 255) {
         throw new RangeError(`COMPILER_ERR:: '${rgbColor}' --> ${blue} is an invalid blue color, it must be an interger between 0 and 255`);
      }

      if(/^(rgba)/i.test(rgbColor)) {
         let alpha = parseFloat(rgbColor.split(",")[3]);
   
         if(alpha > 1) {
            throw new RangeError(`COMPILER_ERR:: '${rgbColor}' --> ${alpha} is an invalid alpha color, it must be an interger or a float number between 0 and 1`);
         }
   
         return { red, green, blue, alpha };
      }
      else {
         return { red, green, blue };
      }
   }
   else {
      if(/^(rgba)/i.test(rgbColor)) {
         throw new SyntaxError(`COMPILER_ERR:: '${rgbColor}' is an invalid RGBA color value`);
      }
      else {
         throw new SyntaxError(`COMPILER_ERR:: '${rgbColor}' is an invalid RGB color value`);
      }
   }
}

function compileHsv(hsvColor) {
   let hue, saturate, value;
   
   if(/^(hsv)\s{0,}\(\s{0,}([0-9]{1,})\s{0,}((deg)|(°)){0,1}\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,}\)$/i.test(hsvColor)
      || /^(hsva)\s{0,}\(\s{0,}([0-9]{1,})\s{0,}((deg)|(°)){0,1}\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,},\s{0,}([0-9]{1,})\s{0,}(%)\s{0,},\s{0,}([0-9]|(0\.([0-9]{1,})))\s{0,}\)$/i.test(hsvColor)) {
      let splitedValues = hsvColor.split(/([0-9]{1,})/);
      hue = parseInt(splitedValues[1]);
      saturate = parseInt(splitedValues[3]);
      value = parseInt(splitedValues[5]);

      if(hue > 360) {
         throw new RangeError(`COMPILER_ERR:: '${hsvColor}' --> ${hue} is an invalid hue value, it must be an interger between 0 and 360`);
      }
      if(saturate > 100) {
         throw new RangeError(`COMPILER_ERR:: '${hsvColor}' --> ${saturate} is an invalid saturate value, it must be an interger between 0 and 100`);
      }
      if(value > 100) {
         throw new RangeError(`COMPILER_ERR:: '${hsvColor}' --> ${value} is an invalid value value, it must be an interger between 0 and 100`);
      }

      if(/^(hsva)/i.test(hsvColor)) {
         let alpha = parseFloat(hsvColor.split(",")[3]);
   
         if(alpha > 1) {
            throw new RangeError(`COMPILER_ERR:: '${hsvColor}' --> ${alpha} is an invalid alpha value, it must be an interger or a float number between 0 and 1`);
         }
   
         return { hue, saturate, value, alpha };
      }
      else {
         return { hue, saturate, value };
      }
   }
   else {
      if(/^(hsva)/i.test(hsvColor)) {
         throw new SyntaxError(`COMPILER_ERR:: '${hsvColor}' is an invalid HSVA color value`);
      }
      else {
         throw new SyntaxError(`COMPILER_ERR:: '${hsvColor}' is an invalid HSV color value`);
      }
   }
}


// let color = colorCompiler('rgba(120 240, 67, 1)');
// let color = colorCompiler('hsva(120deg, 67%, 1%, 1)');
// let color = colorCompiler('hsv(120°, 67%, 1%)');
// let color = colorCompiler('hsva(360, 67%, 1%, 0)');
let color = colorCompiler('hsva(120°, 67%, 1%, 0.031)');
console.log(color);