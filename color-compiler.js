

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

   if(_color.startsWith("rgb")) {
      return compileRgb(_color);
   }
   if(_color.startsWith("hsv")) {
      return compileHsv(_color);
   }
   if(_color.startsWith("hsl")) {

   }
   if(_color.startsWith("#")) {

   }

   throw new Error("COMPILER_ERR:: Color is not type of RGB, HSV, HSL or HEX color models");
}


function compileRgb(rgbColor) {
   let red, green, blue;

   if(/^(rgb)\s{0,}\(\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,}\)$/.test(rgbColor) 
      || /^(rgba)\s{0,}\(\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]{1,})\s{0,},\s{0,}([0-9]|(0\.([0-9]{1,})))\s{0,}\)$/.test(rgbColor)) {
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

      if(rgbColor.startsWith("rgba")) {
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
      if(rgbColor.startsWith("rgba")) {
         throw new Error(`COMPILER_ERR:: '${rgbColor}' is an invalid RGBA color value`);
      }
      else {
         throw new Error(`COMPILER_ERR:: '${rgbColor}' is an invalid RGB color value`);
      }
   }

}


function compileHsv(color) {
   
}

let color = colorCompiler('rgba(120, 240, 67, 1)');
console.log(color);