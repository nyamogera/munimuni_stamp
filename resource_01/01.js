(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 320,
	height: 320,
	fps: 20,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.トゥイーン2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AixAsQgKggAlgWQAogaA3AcQATgXAigHQAegGAfALQAhgbAiADQAnADANAsQAHAXgUABQgUABgDgRQgEgUgTgGQgZgIgdAkQgogUgkASQgdALgLAVQgTgaghACQgiABgGAgQgEARgMACIgDABQgLAAgEgPg");
	this.shape.setTransform(0.2,4.4,0.994,0.999,0,165.1,-15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC0D4").s().p("AiMA2QgUgVgHgaQgGgVAHgOQANgZAcgIQAcgIAaANQAGADAEADQAWgXAhgHQAegHAgALQASgQAZgDQAZgDAXALQAQAIAGAaQAGAbgKAbQgbBMhwAQQgaAEgUAAQhOAAgqgrg");
	this.shape_1.setTransform(-0.4,-0.1,0.994,0.999,0,165.1,-15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-10.1,35.8,20);


(lib.トゥイーン1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AixAsQgKggAlgWQAogaA3AcQATgXAigHQAegGAfALQAhgbAiADQAnADANAsQAHAXgUABQgUABgDgRQgEgUgTgGQgZgIgdAkQgogUgkASQgdALgLAVQgTgaghACQgiABgGAgQgEARgMACIgDABQgLAAgEgPg");
	this.shape.setTransform(-1.1,4.4,1,1.071,0,-178.9,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC0D4").s().p("AiMA2QgUgVgHgaQgGgVAHgOQANgZAcgIQAcgIAaANQAGADAEADQAWgXAhgHQAegHAgALQASgQAZgDQAZgDAXALQAQAIAGAaQAGAbgKAbQgbBMhwAQQgaAEgUAAQhOAAgqgrg");
	this.shape_1.setTransform(0.3,-0.1,1,1,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-10.1,36,20.5);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404040").s().p("AiRD7QgVgGgOgPQgPgPgFgVIg2jZQgNg1ARg0QASgzArgiQArgiA2gFQA3gFAuAZIDWBxQARAIAKAQQAKAQAAATQABASgJARQgJAQgQAJIipBoIh/B/QgPAPgVAFQgJADgKAAQgLAAgKgDg");
	this.shape.setTransform(63.4,41.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,0,0,0.149)").s().p("AA1ITIgBgBQikgWiugEQiRgMiLgkQiMgOhnhSIgogfIgEgMQgvgyg0glIgCgBQgRgMgRgKIgFgNIAAgMIgTgfIgDgJQgKghgRgeIAAgMIgRgVIgIgUIAAgRQgHgDgFgJIgFgMQgLgZgGgaQACgHADgOQAAgCAEgCIAAhjIACgJQAUhXAPhXQARgcAGggQAFggAEgfQACgRAHgHIAEAAIADgBIACgDIACgEIABgEIAIgCQgDAlAAAlQAAF8EgEMQAYAXAZAVQERDhF0AAQDVAAC1hLQCihDCIh/QEgkMAAl8QAAgjgCghQA0BgBFBcQgTAigKAlQgCAKAJABQANADACASQABANAFAHQAJAMALAMIAEAZIADADQgVDRhnCzIgZAoQhCAghDAdIgIABQgTATgaAVQgsAkg6AKIh8A8QgSAJgWABQiVAeiZAUQgoAEgmAAQglAAgjgEg");
	this.shape_1.setTransform(127.8,154.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,0,0,0.098)").s().p("AJmiLIgOgMQA+AsA7A3QAqAoAlAnQAMA/AQA+QhIieiOiFgAMgAbIARAUIgLALgAs7hiQAhgbAigZIgMALQgbAZgZAbIgDgLg");
	this.shape_2.setTransform(133.7,57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// レイヤー 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#404040").s().p("ABpD7QgUgFgPgPIh/h/IiqhoQgPgIgJgRQgJgQAAgTQABgTAKgQQAKgQARgIIDVhxQAvgZA2AFQA3AFArAiQArAiARAzQASA0gNA1Ig3DZQgFAVgOAPQgPAPgUAGQgKADgLAAQgKAAgKgDg");
	this.shape_3.setTransform(194.8,41.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// レイヤー 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ABLBaQgvgEgcguIAAAAQgbAugvAEQhGAFgggfQgbgZABgqQACgmASgdQARgcANAMQAKAKgHARQgDAJgJAMQgOAdAKAZQAJAaAaAMQBAAdBChPIAAAAQBDBPBAgdQAagMAJgaQAJgZgOgdQgIgMgDgJQgHgRAKgKQANgMARAcQASAdACAmQABAqgaAZQgcAbg3AAIgUgBg");
	this.shape_4.setTransform(129.8,131.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9CBA").s().p("AgSAWIgcgpQgCgEACgFQACgEAGAAIBJAAQAIAAADAGQAEAHgEAGIgZAjQgHALgNAAQgMAAgHgLg");
	this.shape_5.setTransform(129.4,122.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggg");
	this.shape_6.setTransform(122.3,129.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggg");
	this.shape_7.setTransform(137.8,129.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_8.setTransform(86.3,103.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhKBLQgggfAAgsQAAgrAggfQAfggArAAQAsAAAfAgQAgAfAAArQAAAsggAfQgfAggsAAQgrAAgfggg");
	this.shape_9.setTransform(83.4,108.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAJgJAKAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgKAAgJgJg");
	this.shape_10.setTransform(181.2,103.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhKBLQgggfAAgsQAAgrAggfQAfggArAAQAsAAAfAgQAgAfAAArQAAAsggAfQgfAggsAAQgrAAgfggg");
	this.shape_11.setTransform(178.2,108.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// レイヤー 5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#404040").ss(5,1,1).p("AxgiqQAajFBjiuQBgirCZiAQCaiCC/hGQDFhIDUAAQDaAADIBLQDDBJCbCHQCaCFBeCwQBhC2AUDKQCBDdAAD6QAAGhlwDCQk6CnpDAAQpDAAlBinQl5jDAAmgQAAkOCUjrg");
	this.shape_12.setTransform(127,111.3,0.858,0.858);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// レイヤー 6
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AnhFFQj3gqi6grQgIgdBdg+QBphFAKgUQB4jlChhmQCohqEIAAQEBAACWBoQCHBdBxDmQALAVCFA6QB8A3gHAaQjNA3j1AwQlKBBibAAQiSAAk7g1g");
	this.shape_13.setTransform(129.6,170.7,0.858,1.073);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE88F").s().p("Ar9MsQlEinAAlmQABjnB/jKQAWioBViWQBTiTCDhuQCEhvCkg8QCpg+C2AAQC7AACsBBQCnA+CFB0QCEByBRCXQBSCcASCtQBvC+gBDWQAAFnk7CmQkOCPnwAAQnxAAkUiPg");
	this.shape_14.setTransform(127,111.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.5,13.3,223,198);


// stage content:
(lib._01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 7
	this.instance = new lib.トゥイーン1("synched",0);
	this.instance.setTransform(179.4,249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.91,y:255.5},5).to({scaleY:1,y:249.5},5).wait(1));

	// レイヤー 6
	this.instance_1 = new lib.トゥイーン2("synched",0);
	this.instance_1.setTransform(133.2,249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.91,y:255.5},5).to({scaleY:1,y:249.5},5).wait(1));

	// レイヤー 9
	this.instance_2 = new lib.body("synched",0);
	this.instance_2.setTransform(153.1,308.9,1,1,0,0,0,127,222.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.95},5).to({scaleY:0.97},2).to({scaleY:1},3).wait(1));

	// ♥
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9CBA").s().p("AhICkIgNgJIgfglQgOgTgLgSQgLgTgIgSQgHgTgFgSQgDgPgBgQQAAgQACgPQACgPAGgOQAFgOAIgMQAMgSAQgMQAPgMASgHQATgGATAAQATAAASAHQARAHAMANQANALAKASQAUgGASABQATABARAGQARAHAPAOQANAMAJARQAKASACATQAEAUgEATQgDAOgFAOQgGAOgJANQgIAMgMALQgLAMgOAKQgQAKgSAIQgSAIgVAGQgUAGgWAEQgXADgZACQgLAAgFgCg");
	this.shape.setTransform(290.9,80);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).wait(5));

	// ♥
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9CBA").s().p("Ag2B8QgCgBgHgGIgZgcQgKgOgJgOQgHgOgGgOQgGgOgDgOQgEgKAAgNQAAgMACgLQABgMAFgKQADgLAHgJQAIgNANgKQALgJAOgFQAOgEAPgBQAPABANAFQAMAFAJAJQALAKAGAMQAQgDANAAQAPAAANAFQANAGALAKQAKAKAHAMQAHANACAPQACAPgCAOQgCALgFALQgEAKgHAKQgGAJgJAJQgIAJgLAHQgMAHgNAHQgOAGgQAEQgPAFgQADQgSADgTABQgJAAgDgCg");
	this.shape_1.setTransform(280.1,110.2);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).to({_off:true},7).wait(1));

	// ♥
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9CBA").s().p("AghBLIgFgEIgPgRQgHgJgFgIIgIgRIgGgRIgBgNQgBgIABgHQABgHADgGQACgHAEgFQAFgIAIgGQAHgGAIgDQAJgCAJAAQAIAAAJADQAHADAFAGQAGAFAFAIQAJgDAIABQAJAAAIAEQAIADAHAGQAGAGAEAHQAEAIACAKQABAIgCAJIgDANIgHALIgJAMIgMAKQgHAEgJAEIgSAHIgSAEQgKACgMAAIgIgBg");
	this.shape_2.setTransform(269,132.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(201.6,259.4,223,198);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;