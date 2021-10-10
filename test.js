describe("RGB test", function() {
	it("rgba(120 240, 67, 1)", function() {
		const color = "rgba(120 240, 67, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgba(120 240, 67, 1)' is an invalid RGBA color value"));
	})
	
	it("rgba(120, 240, 67, 1)", function() {
		const color = "rgba(120, 240, 67, 1)";
		const resultColor = colorCompiler(color);
		expect(resultColor.red).toBe(120)
		expect(resultColor.green).toBe(240)
		expect(resultColor.blue).toBe(67)
		expect(resultColor.alpha).toBe(1)
	})
	
	it("   rgba   (    120   ,   240   , 67   , 1   )   ", function() {
		const color = "   rgba   (    120   ,   240   , 67   , 1   )   ";
		const resultColor = colorCompiler(color);
		expect(resultColor.red).toBe(120)
		expect(resultColor.green).toBe(240)
		expect(resultColor.blue).toBe(67)
		expect(resultColor.alpha).toBe(1)
	})
	
	it("rgba(120 240 67 1)", function() {
		const color = "rgba(120 240 67 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgba(120 240 67 1)' is an invalid RGBA color value"));
	})
	
	it("rgb(120 240 67 1)", function() {
		const color = "rgb(120 240 67 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(120 240 67 1)' is an invalid RGB color value"));
	})
	
	it("rgb(120, 240, 67, 1)", function() {
		const color = "rgb(120, 240, 67, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(120, 240, 67, 1)' is an invalid RGB color value"));
	})
	
	it("rgba(120, 240, 67)", function() {
		const color = "rgba(120, 240, 67)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgba(120, 240, 67)' is an invalid RGBA color value"));
	})
	
	it("rgb(120 240 67)", function() {
		const color = "rgb(120 240 67)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(120 240 67)' is an invalid RGB color value"));
	})
	
	it("rgb(400, 240, 67)", function() {
		const color = "rgb(400, 240, 67)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(400, 240, 67)' --> 400 is an invalid red color, it must be an interger between 0 and 255"));
	})
	
	it("rgb(120, 260, 67)", function() {
		const color = "rgb(120, 260, 67)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(120, 260, 67)' --> 260 is an invalid green color, it must be an interger between 0 and 255"));
	})
	
	it("rgb(120, 250, 607)", function() {
		const color = "rgb(120, 250, 607)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(120, 250, 607)' --> 607 is an invalid blue color, it must be an interger between 0 and 255"));
	})
	
	it("rgb(120, 260, 607)", function() {
		const color = "rgb(120, 260, 607)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(120, 260, 607)' --> 260 is an invalid green color, it must be an interger between 0 and 255"));
	})
	
	it("rgba(120, 260, 607)", function() {
		const color = "rgba(120, 260, 607)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgba(120, 260, 607)' is an invalid RGBA color value"));
	})
	
	it("rgba(120, 260, 607, 1)", function() {
		const color = "rgba(120, 260, 607, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgba(120, 260, 607, 1)' --> 260 is an invalid green color, it must be an interger between 0 and 255"));
	})
	
	it("rgba(120 260 607, 1)", function() {
		const color = "rgba(120 260 607, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgba(120 260 607, 1)' is an invalid RGBA color value"));
	})
	
	it("rgba(120, 200 40, 1)", function() {
		const color = "rgba(120, 200 40, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgba(120, 200 40, 1)' is an invalid RGBA color value"));
	})
	
	it("rgb(120, 280, 40, 1)", function() {
		const color = "rgb(120, 280, 40, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(120, 280, 40, 1)' is an invalid RGB color value"));
	})
	
	it("rgb(12*0, 280, 40)", function() {
		const color = "rgb(12*0, 280, 40)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(12*0, 280, 40)' is an invalid RGB color value"));
	})
	
	it("rgbb    (120, 280, 40)", function() {
		const color = "rgbb    (120, 280, 40)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgbb    (120, 280, 40)' is an invalid RGB color value"));
	})
	
	it("rrgb    (120, 280, 40)", function() {
		const color = "rrgb    (120, 280, 40)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: Color is not type of RGB, HSV, HSL or HEX color models"));
	})
	
	it("rrgb(120, 280, 40)", function() {
		const color = "rrgb(120, 280, 40)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: Color is not type of RGB, HSV, HSL or HEX color models"));
	})
	
	it("rgb(12   0, 280, 40)", function() {
		const color = "rgb(12   0, 280, 40)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(12   0, 280, 40)' is an invalid RGB color value"));
	})
	
	it("rgb(RTF, 45, 40)", function() {
		const color = "rgb(RTF, 45, 40)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgb(RTF, 45, 40)' is an invalid RGB color value"));
	})
	
	it("rgba(120, 250, 40, 0.40)", function() {
		const color = "rgba(120, 250, 40, 0.40)";
		const resultColor = colorCompiler(color);
		expect(resultColor.red).toBe(120)
		expect(resultColor.green).toBe(250)
		expect(resultColor.blue).toBe(40)
		expect(resultColor.alpha).toBe(0.40)
	})

	it("rgba(120, 250, 40, 0 .40)", function() {
		const color = "rgba(120, 250, 40, 0 .40)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgba(120, 250, 40, 0 .40)' is an invalid RGBA color value"));
	})

	it("rgba(120, 250, 40, 0. 40)", function() {
		const color = "rgba(120, 250, 40, 0. 40)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'rgba(120, 250, 40, 0. 40)' is an invalid RGBA color value"));
	})
})

describe("HSV test", function() {
	it("hsva(120deg, 67%, 1%, 1)", function() {
		const color = "hsva(120deg, 67%, 1%, 1)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsv(120°, 67%, 1%)", function() {
		const color = "hsv(120°, 67%, 1%)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsva(360, 67%, 1%, 0)", function() {
		const color = "hsva(360, 67%, 1%, 0)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(360);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(0);
	})
	
	it("hsva(120°, 67%, 1%, 0.031)", function() {
		const color = "hsva(120°, 67%, 1%, 0.031)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(0.031);
	})
	
	it("hsva(120°, 67, 1%, 0.031)", function() {
		const color = "hsva(120°, 67, 1%, 0.031)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsva(120°, 67, 1%, 0.031)' is an invalid HSVA color value"));
	})
	
	it("hsva(120° 67% 1% 0.031)", function() {
		const color = "hsva(120° 67% 1% 0.031)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsva(120° 67% 1% 0.031)' is an invalid HSVA color value"));
	})
	
	it("hsva(120 67% 1% 0.031)", function() {
		const color = "hsva(120 67% 1% 0.031)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsva(120 67% 1% 0.031)' is an invalid HSVA color value"));
	})
	
	it("hsva(120deg, 67%, 1%, 0.031)", function() {
		const color = "hsva(120deg, 67%, 1%, 0.031)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(0.031);
	})
	
	it("hsv(120, 67%, 1%)", function() {
		const color = "hsv(120, 67%, 1%)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsv(120, 67%, 1)", function() {
		const color = "hsv(120, 67%, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsv(120, 67%, 1)' is an invalid HSV color value"));
	})
	
	it("hsv(120, 67, 1%)", function() {
		const color = "hsv(120, 67, 1%)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsv(120, 67, 1%)' is an invalid HSV color value"));
	})
	
	it("hsv(120, 67, 1)", function() {
		const color = "hsv(120, 67, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsv(120, 67, 1)' is an invalid HSV color value"));
	})
})

describe("HSL test", function() {
	it("hsla(120deg, 67%, 1%, 1)", function() {
		const color = "hsla(120deg, 67%, 1%, 1)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsl(120°, 67%, 1%)", function() {
		const color = "hsl(120°, 67%, 1%)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsla(360, 67%, 1%, 0)", function() {
		const color = "hsla(360, 67%, 1%, 0)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(360);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(0);
	})
	
	it("hsla(120°, 67%, 1%, 0.031)", function() {
		const color = "hsla(120°, 67%, 1%, 0.031)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(0.031);
	})
	
	it("hsla(120°, 67, 1%, 0.031)", function() {
		const color = "hsla(120°, 67, 1%, 0.031)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsla(120°, 67, 1%, 0.031)' is an invalid HSLA color value"));
	})
	
	it("hsla(120° 67% 1% 0.031)", function() {
		const color = "hsla(120° 67% 1% 0.031)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsla(120° 67% 1% 0.031)' is an invalid HSLA color value"));
	})
	
	it("hsla(120 67% 1% 0.031)", function() {
		const color = "hsla(120 67% 1% 0.031)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsla(120 67% 1% 0.031)' is an invalid HSLA color value"));
	})
	
	it("hsla(120deg, 67%, 1%, 0.031)", function() {
		const color = "hsla(120deg, 67%, 1%, 0.031)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(0.031);
	})
	
	it("hsl(120, 67%, 1%)", function() {
		const color = "hsl(120, 67%, 1%)";
		const resultColor = colorCompiler(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsl(120, 67%, 1)", function() {
		const color = "hsl(120, 67%, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsl(120, 67%, 1)' is an invalid HSL color value"));
	})
	
	it("hsl(120, 67, 1%)", function() {
		const color = "hsl(120, 67, 1%)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsl(120, 67, 1%)' is an invalid HSL color value"));
	})
	
	it("hsl(120, 67, 1)", function() {
		const color = "hsl(120, 67, 1)";
		const bindFunction = colorCompiler.bind(this, color);
		expect(bindFunction).toThrow(new Error("COMPILER_ERR:: 'hsl(120, 67, 1)' is an invalid HSL color value"));
	})
})

describe("HEX tests", function() {
	
})