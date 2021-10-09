
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




//it("hsva(120deg, 67%, 1%, 1)", function() {
	
//})

//it("hsv(120°, 67%, 1%)", function() {
	
//})

//it("hsva(360, 67%, 1%, 0)", function() {
	
//})
