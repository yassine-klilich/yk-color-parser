it("should throw error when no argument is provided", function() {
	const bindFunction = ColorConverter.convertColor.bind(this);
	expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: Failed to execute 'convertColor' on 'ColorConverter': 1 argument required, but only 0 present"));
})

describe("RGB test", function() {
	it("rgba(120 240, 67, 1)", function() {
		const color = "rgba(120 240, 67, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgba(120 240, 67, 1)' is an invalid RGBA color value"));
	})
	
	it("rgba(120, 240, 67, 1)", function() {
		const color = "rgba(120, 240, 67, 1)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.red).toBe(120)
		expect(resultColor.green).toBe(240)
		expect(resultColor.blue).toBe(67)
		expect(resultColor.alpha).toBe(1)
	})
	
	it("   rgba   (    120   ,   240   , 67   , 1   )   ", function() {
		const color = "   rgba   (    120   ,   240   , 67   , 1   )   ";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.red).toBe(120)
		expect(resultColor.green).toBe(240)
		expect(resultColor.blue).toBe(67)
		expect(resultColor.alpha).toBe(1)
	})
	
	it("rgba(120 240 67 1)", function() {
		const color = "rgba(120 240 67 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgba(120 240 67 1)' is an invalid RGBA color value"));
	})
	
	it("rgb(120 240 67 1)", function() {
		const color = "rgb(120 240 67 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(120 240 67 1)' is an invalid RGB color value"));
	})
	
	it("rgb(120, 240, 67, 1)", function() {
		const color = "rgb(120, 240, 67, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(120, 240, 67, 1)' is an invalid RGB color value"));
	})
	
	it("rgba(120, 240, 67)", function() {
		const color = "rgba(120, 240, 67)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgba(120, 240, 67)' is an invalid RGBA color value"));
	})
	
	it("rgb(120 240 67)", function() {
		const color = "rgb(120 240 67)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(120 240 67)' is an invalid RGB color value"));
	})
	
	it("rgb(400, 240, 67)", function() {
		const color = "rgb(400, 240, 67)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(400, 240, 67)' --> 400 is an invalid red color, it must be an interger between 0 and 255"));
	})
	
	it("rgb(120, 260, 67)", function() {
		const color = "rgb(120, 260, 67)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(120, 260, 67)' --> 260 is an invalid green color, it must be an interger between 0 and 255"));
	})
	
	it("rgb(120, 250, 607)", function() {
		const color = "rgb(120, 250, 607)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(120, 250, 607)' --> 607 is an invalid blue color, it must be an interger between 0 and 255"));
	})
	
	it("rgb(120, 260, 607)", function() {
		const color = "rgb(120, 260, 607)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(120, 260, 607)' --> 260 is an invalid green color, it must be an interger between 0 and 255"));
	})
	
	it("rgba(120, 260, 607)", function() {
		const color = "rgba(120, 260, 607)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgba(120, 260, 607)' is an invalid RGBA color value"));
	})
	
	it("rgba(120, 260, 607, 1)", function() {
		const color = "rgba(120, 260, 607, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgba(120, 260, 607, 1)' --> 260 is an invalid green color, it must be an interger between 0 and 255"));
	})
	
	it("rgba(120 260 607, 1)", function() {
		const color = "rgba(120 260 607, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgba(120 260 607, 1)' is an invalid RGBA color value"));
	})
	
	it("rgba(120, 200 40, 1)", function() {
		const color = "rgba(120, 200 40, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgba(120, 200 40, 1)' is an invalid RGBA color value"));
	})
	
	it("rgb(120, 280, 40, 1)", function() {
		const color = "rgb(120, 280, 40, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(120, 280, 40, 1)' is an invalid RGB color value"));
	})
	
	it("rgb(12*0, 280, 40)", function() {
		const color = "rgb(12*0, 280, 40)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(12*0, 280, 40)' is an invalid RGB color value"));
	})
	
	it("rgbb    (120, 280, 40)", function() {
		const color = "rgbb    (120, 280, 40)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgbb    (120, 280, 40)' is an invalid RGB color value"));
	})
	
	it("rrgb    (120, 280, 40)", function() {
		const color = "rrgb    (120, 280, 40)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: Color is not type of RGB, HSV, HSL or HEX color models"));
	})
	
	it("rrgb(120, 280, 40)", function() {
		const color = "rrgb(120, 280, 40)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: Color is not type of RGB, HSV, HSL or HEX color models"));
	})
	
	it("rgb(12   0, 280, 40)", function() {
		const color = "rgb(12   0, 280, 40)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(12   0, 280, 40)' is an invalid RGB color value"));
	})
	
	it("rgb(RTF, 45, 40)", function() {
		const color = "rgb(RTF, 45, 40)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgb(RTF, 45, 40)' is an invalid RGB color value"));
	})
	
	it("rgba(120, 250, 40, 0.40)", function() {
		const color = "rgba(120, 250, 40, 0.40)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.red).toBe(120)
		expect(resultColor.green).toBe(250)
		expect(resultColor.blue).toBe(40)
		expect(resultColor.alpha).toBe(0.40)
	})

	it("rgba(120, 250, 40, 0 .40)", function() {
		const color = "rgba(120, 250, 40, 0 .40)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgba(120, 250, 40, 0 .40)' is an invalid RGBA color value"));
	})

	it("rgba(120, 250, 40, 0. 40)", function() {
		const color = "rgba(120, 250, 40, 0. 40)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'rgba(120, 250, 40, 0. 40)' is an invalid RGBA color value"));
	})
})

describe("HSV test", function() {
	it("hsva(120deg, 67%, 1%, 1)", function() {
		const color = "hsva(120deg, 67%, 1%, 1)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsv(120°, 67%, 1%)", function() {
		const color = "hsv(120°, 67%, 1%)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsva(360, 67%, 1%, 0)", function() {
		const color = "hsva(360, 67%, 1%, 0)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(360);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(0);
	})
	
	it("hsva(120°, 67%, 1%, 0.031)", function() {
		const color = "hsva(120°, 67%, 1%, 0.031)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(0.031);
	})
	
	it("hsva(120°, 67, 1%, 0.031)", function() {
		const color = "hsva(120°, 67, 1%, 0.031)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsva(120°, 67, 1%, 0.031)' is an invalid HSVA color value"));
	})
	
	it("hsva(120° 67% 1% 0.031)", function() {
		const color = "hsva(120° 67% 1% 0.031)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsva(120° 67% 1% 0.031)' is an invalid HSVA color value"));
	})
	
	it("hsva(120 67% 1% 0.031)", function() {
		const color = "hsva(120 67% 1% 0.031)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsva(120 67% 1% 0.031)' is an invalid HSVA color value"));
	})
	
	it("hsva(120deg, 67%, 1%, 0.031)", function() {
		const color = "hsva(120deg, 67%, 1%, 0.031)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(0.031);
	})
	
	it("hsv(120, 67%, 1%)", function() {
		const color = "hsv(120, 67%, 1%)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.value).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsv(120, 67%, 1)", function() {
		const color = "hsv(120, 67%, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsv(120, 67%, 1)' is an invalid HSV color value"));
	})
	
	it("hsv(120, 67, 1%)", function() {
		const color = "hsv(120, 67, 1%)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsv(120, 67, 1%)' is an invalid HSV color value"));
	})
	
	it("hsv(120, 67, 1)", function() {
		const color = "hsv(120, 67, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsv(120, 67, 1)' is an invalid HSV color value"));
	})
})

describe("HSL test", function() {
	it("hsla(120deg, 67%, 1%, 1)", function() {
		const color = "hsla(120deg, 67%, 1%, 1)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsl(120°, 67%, 1%)", function() {
		const color = "hsl(120°, 67%, 1%)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsla(360, 67%, 1%, 0)", function() {
		const color = "hsla(360, 67%, 1%, 0)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(360);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(0);
	})
	
	it("hsla(120°, 67%, 1%, 0.031)", function() {
		const color = "hsla(120°, 67%, 1%, 0.031)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(0.031);
	})
	
	it("hsla(120°, 67, 1%, 0.031)", function() {
		const color = "hsla(120°, 67, 1%, 0.031)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsla(120°, 67, 1%, 0.031)' is an invalid HSLA color value"));
	})
	
	it("hsla(120° 67% 1% 0.031)", function() {
		const color = "hsla(120° 67% 1% 0.031)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsla(120° 67% 1% 0.031)' is an invalid HSLA color value"));
	})
	
	it("hsla(120 67% 1% 0.031)", function() {
		const color = "hsla(120 67% 1% 0.031)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsla(120 67% 1% 0.031)' is an invalid HSLA color value"));
	})
	
	it("hsla(120deg, 67%, 1%, 0.031)", function() {
		const color = "hsla(120deg, 67%, 1%, 0.031)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(0.031);
	})
	
	it("hsl(120, 67%, 1%)", function() {
		const color = "hsl(120, 67%, 1%)";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.hue).toBe(120);
		expect(resultColor.saturate).toBe(67);
		expect(resultColor.lightness).toBe(1);
		expect(resultColor.alpha).toBe(1);
	})
	
	it("hsl(120, 67%, 1)", function() {
		const color = "hsl(120, 67%, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsl(120, 67%, 1)' is an invalid HSL color value"));
	})
	
	it("hsl(120, 67, 1%)", function() {
		const color = "hsl(120, 67, 1%)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsl(120, 67, 1%)' is an invalid HSL color value"));
	})
	
	it("hsl(120, 67, 1)", function() {
		const color = "hsl(120, 67, 1)";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: 'hsl(120, 67, 1)' is an invalid HSL color value"));
	})
})

describe("HEX tests", function() {
	it("#234", function() {
		const color = "#234";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.red).toBe('22');
		expect(resultColor.green).toBe('33');
		expect(resultColor.blue).toBe('44');
		expect(resultColor.alpha).toBe("FF");
	});

	it("#2E4", function() {
		const color = "#2E4";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.red).toBe('22');
		expect(resultColor.green).toBe('EE');
		expect(resultColor.blue).toBe('44');
		expect(resultColor.alpha).toBe("FF");
	});

	it("#2E4T", function() {
		const color = "#2E4T";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: '#2E4T' is an invalid HEX color value"));
	});

	it("#2E4F", function() {
		const color = "#2E4F";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.red).toBe('22');
		expect(resultColor.green).toBe('EE');
		expect(resultColor.blue).toBe('44');
		expect(resultColor.alpha).toBe("FF");
	});

	it("#2E4FE", function() {
		const color = "#2E4FE";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: '#2E4FE' is an invalid HEX color value"));
	});

	it("# 2E4F", function() {
		const color = "# 2E4F";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: '# 2E4F' is an invalid HEX color value"));
	});

	it("#2E4FFA", function() {
		const color = "#2E4FFA";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.red).toBe('2E');
		expect(resultColor.green).toBe('4F');
		expect(resultColor.blue).toBe('FA');
		expect(resultColor.alpha).toBe("FF");
	});

	it("#2E4FFA5", function() {
		const color = "#2E4FFA5";
		const bindFunction = ColorConverter.convertColor.bind(this, color);
		expect(bindFunction).toThrow(new Error("COLOR_CONVERT_ERR:: '#2E4FFA5' is an invalid HEX color value"));
	});

	it("#2E4FFAE3", function() {
		const color = "#2E4FFAE3";
		const resultColor = ColorConverter.convertColor(color);
		expect(resultColor.red).toBe('2E');
		expect(resultColor.green).toBe('4F');
		expect(resultColor.blue).toBe('FA');
		expect(resultColor.alpha).toBe("E3");
	});


})