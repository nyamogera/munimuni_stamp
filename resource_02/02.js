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



(lib.ham = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404040").s().p("AixAsQgKggAlgWQAogaA3AcQATgXAigHQAegGAfALQAhgbAiADQAnADANAsQAHAXgUABQgUABgDgRQgEgUgTgGQgZgIgdAkQgogUgkASQgdALgLAVQgTgaghACQgiABgGAgQgEARgMACIgDABQgLAAgEgPg");
	this.shape.setTransform(22,167.4,0.999,1.071,0,-150.9,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC0D4").s().p("ACjCxQgrgJgcgfQg6AQg3gRQg3gQgkgsQgIAGgKADQgwAVgwgSQgwgSgTguQgLgYAOgmQAPgtAmghQBmhbDDAqQDDArAlCHQAOA0gOAvQgOAsgdAMQgcAMgdAAQgOAAgPgDg");
	this.shape_1.setTransform(23.1,163.5,0.527,0.527,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// レイヤー 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404040").s().p("AA6AjQgfAMgegGQgigHgTgXQg3AegngbQglgWALgjQAFgRANABQAMADADASQAGAiAiABQAhABAUgcQAKAWAdALQAjATApgWQAcAmAZgKQATgHAEgVQAEgSAUABQAUAAgIAYQgOAwgnAEIgJABQgdAAgcgZg");
	this.shape_2.setTransform(116.3,188.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC0D4").s().p("AC7CzQgzgCglgnIgNgQQgxAag4gHQg6gIgvgmQgnARgqgKQgsgJgfgiQgWgWAGgsQAFgxAigpQBahvDBAoQDFApA5B8QAWAtgFAuQgDApgUATQghAfguAAIgIAAg");
	this.shape_3.setTransform(117.3,184.8,0.527,0.527);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404040").s().p("AixAsQgKggAlgWQAogaA3AcQATgXAigHQAegGAfALQAhgbAiADQAnADANAsQAHAXgUABQgUABgDgRQgEgUgTgGQgZgIgdAkQgogUgkASQgdALgLAVQgTgaghACQgiABgGAgQgEARgMACIgDABQgLAAgEgPg");
	this.shape_4.setTransform(96.9,187.1,1,1.071,0,-178.9,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:117.3,y:184.8}},{t:this.shape_2}]}).to({state:[{t:this.shape_3,p:{x:97.3,y:181.8}},{t:this.shape_4}]},1).wait(1));

	// レイヤー 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404040").s().p("ADDHgQgmgKgcgbIjujsIk7jEQgegQgQgfQgRgeACgjQABgjASgdQATgeAfgQIGNjRQBjg1BlgJQB2gKBKA6QBLA8AbB7QAYBxgaBqIhmGWQgJAmgbAcQgbAcgmALQgTAFgUAAQgSAAgSgEg");
	this.shape_5.setTransform(135.2,27.6,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2));

	// レイヤー 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ACECeQgogDghgWQgjgXgYgnIAAAAQgxBQhSAHQh7AJg5g2QgvgtADhLQAChCAfgzQAggyAWAWQASASgMAcQgHAQgOAVQgZAzARAuQAQAuAuAUQAwAWA6gTQBBgVA6hGIAAABIAAgBQA7BGBBAVQA6ATAwgWQAugUAQguQARgugZgzQgOgVgHgQQgMgcASgSQAWgWAgAyQAfAzACBCQADBLgvAtQgxAuhgAAIgjgBg");
	this.shape_6.setTransform(61.4,121.7,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2));

	// レイヤー 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9CBA").s().p("AgRAsQgOgHgIgNIgYgiQgIgOAHgNQAHgOAQAAIA7AAQAeAAAOAaQAHANgBAMQAAANgIALIAAAAQgSAcgggBQgOABgNgIg");
	this.shape_7.setTransform(60.6,112.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(2));

	// レイヤー 7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiHCIQg4g4AAhQQAAhPA4g3QA5g5BOAAQBPAAA5A5QA4A3AABPQAABQg4A4Qg5A4hPAAQhOAAg5g4g");
	this.shape_8.setTransform(54.4,119.3,0.527,0.527);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiGCIQg5g5AAhPQAAhPA5g4QA4g4BOAAQBQAAA4A4QA4A4AABPQAABPg4A5Qg4A4hQAAQhOAAg4g4g");
	this.shape_9.setTransform(68.8,119.6,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// レイヤー 8
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#404040").ss(5,1,1).p("A/0kOQAvk4CzkWQCukOEXjMQEXjNFbhwQFnhzGDAAQGMAAFtB4QFiB0EZDVQEZDUCrEYQCvEfAlFBQByCsA7C5QA9DBAADGQAAKXqcE0Qo8EJwcAAQwfAApIkJQquk2AAqVQAAjXBHjOQBEjGCFi2g");
	this.shape_10.setTransform(121.6,93,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2));

	// レイヤー 9
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggAkQgOgPAAgVQAAgUAOgPQAOgPASAAQATAAAOAPQAOAPAAAUQAAAVgOAPQgOAPgTAAQgSAAgOgPg");
	this.shape_11.setTransform(31.8,89.7,0.527,0.527);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ah4CFQgzg3ABhOQgBhMAzg3QAzg4BFAAQBGAAAzA4QAzA3gBBMQABBOgzA3QgzA3hGAAQhFAAgzg3g");
	this.shape_12.setTransform(29.3,94.5,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	// レイヤー 10
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_13.setTransform(112.5,92.6,0.527,0.527);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiECFQg3g4AAhNQAAhMA3g3QA4g4BMAAQBNAAA4A4QA3A3AABMQAABNg3A4Qg4A3hNAAQhMAAg4g3g");
	this.shape_14.setTransform(109.8,97.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	// レイヤー 11
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjJJjQk/gFjSgbQjhgcjghGQkShVh7gZQgIgbhfhVQgjgfihiJQkEjaAygLQCWggBrhWQAmgfAvgwIBMhSQBfhhBlgrQCNg6DeAFQFIAID9BhQBUAgCJBCQCnBRBKAgQFFCOGfBPQI0BpNYAaQmsGfwxBrQlDAglYAAIiAgBg");
	this.shape_15.setTransform(120.3,154.7,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(2));

	// レイヤー 12
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE88F").s().p("A5WXeQquk2AAqVQAAjXBHjOQBFjGCDi3QAwk4CzkUQCvkOEWjNQEXjNFbhvQFnh0GCAAQGNAAFtB4QFhB0EaDWQEZDUCrEXQCvEfAkFBQBzCtA6C4QA+DBgBDGQAAKXqcE0Qo7EJwcAAQwfAApIkJg");
	this.shape_16.setTransform(121.6,93,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(2));

	// レイヤー 13
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#404040").s().p("AkPHSQgmgKgbgcQgbgcgJgmIhmmXQgYhiAhhgQAhhgBQg/QBQg/BlgJQBlgJBYAvIGNDRQAfAQATAdQASAeACAiQABAjgRAfQgQAfgeARIk7DCIjuDsQgcAcglAJQgSAFgSAAQgUAAgUgGg");
	this.shape_17.setTransform(39.6,29.6,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(2));

	// レイヤー 14
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFC0D4").s().p("ACjCwQgrgIgdgfQg6AQg2gRQg3gRgkgrIgSAJQgxAUgvgSQgwgSgTgtQgLgYAOgnQAPgsAmgiQBmhbDDArQDDArAlCHQAOA0gPAvQgOAsgcAMQgcALgdAAQgOAAgPgDg");
	this.shape_18.setTransform(128.8,146.8,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(2));

	// レイヤー 15
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFC0D4").s().p("ABrCPQgIgGgGgJQg1Aig7AAQg+ABgygiQgoAXgugEQgugEgigfQgXgVAFgyQAFgzAkgwQBeiDDOAPQDRAQA+B8QAXAtgEAyQgDAsgVAXQgmApg2AFIgKAAQgwAAgjggg");
	this.shape_19.setTransform(208.3,155.9,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1).to({x:223.8},0).wait(1));

	// レイヤー 16
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#404040").s().p("AixAsQgKggAlgWQAogaA3AcQATgXAigHQAegGAfALQAhgbAiADQAnADANAsQAHAXgUABQgUABgDgRQgEgUgTgGQgZgIgdAkQgogUgkASQgdALgLAVQgTgaghACQgiABgGAgQgEARgMACIgDABQgLAAgEgPg");
	this.shape_20.setTransform(53.9,182.4,1,1.071,0,-173.9,3.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC0D4").s().p("ACjCxQgrgJgcgfQg6AQg3gRQg3gQgkgsQgIAGgKADQgwAVgwgSQgwgSgTguQgLgYAOgmQAPgtAmghQBmhbDDAqQDDArAlCHQAOA0gOAvQgOAsgdAMQgcAMgdAAQgOAAgPgDg");
	this.shape_21.setTransform(54.1,178.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,248.2,197.4);


// stage content:



(lib._02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ham
	this.instance = new lib.ham("synched",0);
	this.instance.setTransform(167.7,302,1,1,0,0,0,121.5,194.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.95,startPosition:1},1).wait(1));

	// レイヤー 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#159200").s().p("ADHFSQgNgBgIgLInIo7QgIgKABgNQACgOAKgIIAzgoQAKgJANACQANABAJALIHII7QAIAKgBAOQgCANgKAIIgzAoQgJAHgLAAIgEAAg");
	this.shape.setTransform(329,224.8,0.527,0.527);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24FF00").s().p("ACoFkQgWgDgOgRImtoaQgOgRACgWQACgWASgOIBThCQASgOAVACQAXADANARIGtIaQAOARgCAWQgCAWgSAOIhTBDQgPALgRAAIgHAAg");
	this.shape_1.setTransform(330.7,223.5,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:330.7,y:223.5}},{t:this.shape,p:{x:329,y:224.8}}]}).to({state:[{t:this.shape_1,p:{x:320.7,y:230.5}},{t:this.shape,p:{x:319,y:231.8}}]},1).wait(1));

	// レイヤー 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#159200").s().p("ACEFyQgMgFgHgLIlUqHQgGgMAEgNQAEgMALgHIA6geQALgGANAEQANAEAGAMIFVKGQAGAMgEANQgEANgMAGIg5AeQgHAEgIAAIgKgBg");
	this.shape_2.setTransform(285.8,255.4,0.527,0.527);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24FF00").s().p("ABiF9QgVgHgKgTIlBpiQgKgTAGgVQAHgVATgLIBegxQAUgLAVAHQAVAGAKAUIFBJhQAKAUgGAVQgHAVgTAKIheAyQgMAHgMAAQgIAAgJgDg");
	this.shape_3.setTransform(287.7,254.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:287.7,y:254.4}},{t:this.shape_2,p:{x:285.8,y:255.4}}]}).to({state:[{t:this.shape_3,p:{x:276.5,y:263.5}},{t:this.shape_2,p:{x:274.6,y:264.5}}]},1).wait(1));

	// レイヤー 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#159200").s().p("ABIGCQgLgFgFgNIjqq1QgEgMAGgMQAFgMANgFIA+gVQANgEAMAGQALAGAFANIDpK0QAFANgGAMQgFAMgNAEIg9AVQgGACgFAAQgHAAgIgEg");
	this.shape_4.setTransform(241.2,275.9,0.527,0.527);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24FF00").s().p("AAlGIQgUgKgHgVIjdqMQgHgWAKgTQAKgUAVgHIBlgjQAUgGAUAJQAUAKAHAVIDdKNQAHAUgKAUQgKAUgVAHIhlAiQgJADgIAAQgMAAgLgFg");
	this.shape_5.setTransform(243.3,275.2,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:243.3,y:275.2}},{t:this.shape_4,p:{x:241.2,y:275.9}}]}).to({state:[{t:this.shape_5,p:{x:223.6,y:282}},{t:this.shape_4,p:{x:221.5,y:282.7}}]},1).wait(1));

	// レイヤー 8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#159200").s().p("AgtGGQgJgJgBgOIgQraQgBgOAKgKQAIgKAOAAIA+gBQAOAAAKAJQAJAJAAANIARLcQABANgKAKQgJAKgNgBIg/ACIgBAAQgMAAgKgJg");
	this.shape_6.setTransform(180.4,286.1,0.527,0.527);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24FF00").s().p("AhRGBQgQgPAAgXIgQqwQgBgXAQgQQAPgQAWgBIBpgCQAVAAARAPQAQAPAAAWIAQKyQABAVgQARQgPAPgWABIhpACIgBABQgVAAgQgPg");
	this.shape_7.setTransform(182.5,286,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:182.5}},{t:this.shape_6,p:{x:180.4}}]}).to({state:[{t:this.shape_7,p:{x:165.3}},{t:this.shape_6,p:{x:163.1}}]},1).wait(1));

	// レイヤー 9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#159200").s().p("AhPGIIg/gSQgMgEgHgMQgGgMAEgNIDLq9QADgNAMgHQAMgGANADIA+ASQANAFAHALQAGAMgEANIjLK9QgEANgMAHQgHAEgIAAIgJgBg");
	this.shape_8.setTransform(124.2,285.7,0.527,0.527);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24FF00").s().p("Ag7GOIhngeQgVgHgKgTQgLgTAGgVIDCqWQAEgVATgLQAUgLAVAHIBmAdQAWAHAKATQALATgGAWIjCKVQgFAWgTAKQgMAHgNAAQgIAAgHgCg");
	this.shape_9.setTransform(126.3,286.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:126.3,y:286.4}},{t:this.shape_8,p:{x:124.2,y:285.7}}]}).to({state:[{t:this.shape_9,p:{x:110.1,y:279}},{t:this.shape_8,p:{x:108,y:278.4}}]},1).wait(1));

	// レイヤー 10
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#159200").s().p("AiLF3Ig6gcQgNgFgEgNQgFgNAGgMIE2qWQAFgMANgFQANgEAMAFIA6AcQAMAFAFANQAEANgFAMIk2KWQgGAMgMAFQgGACgFAAQgHAAgHgDg");
	this.shape_10.setTransform(75,264.3,0.527,0.527);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24FF00").s().p("Ah4GAIhgguQgUgKgIgUQgHgVAJgUIEkpwQAKgUAUgIQAVgHAUAJIBgAuQAUAKAIAUQAHAVgJAUIkkJwQgJATgVAJQgJADgJAAQgMAAgLgFg");
	this.shape_11.setTransform(76.9,265.2,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{x:76.9,y:265.2}},{t:this.shape_10,p:{x:75,y:264.3}}]}).to({state:[{t:this.shape_11,p:{x:60.7,y:254.9}},{t:this.shape_10,p:{x:58.7,y:254}}]},1).wait(1));

	// レイヤー 11
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#159200").s().p("AjVFSIgzgnQgLgIgCgNQgCgOAIgKIG4pIQAIgLANgCQANgBALAIIAzAnQALAIACANQACANgIALIm4JHQgIALgNACIgGAAQgKAAgIgGg");
	this.shape_12.setTransform(27,233.1,0.527,0.527);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#24FF00").s().p("AjFFeIhVhAQgRgNgDgWQgDgWANgSIGeomQANgRAWgEQAWgDASAOIBVBAQASANADAWQADAWgOASImeImQgNARgWADIgIABQgRAAgPgLg");
	this.shape_13.setTransform(28.7,234.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{x:28.7,y:234.4}},{t:this.shape_12,p:{x:27,y:233.1}}]}).to({state:[{t:this.shape_13,p:{x:16.6,y:224.3}},{t:this.shape_12,p:{x:14.9,y:223}}]},1).wait(1));

	// レイヤー 4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgYUA5lQrNkwoqopQopoqkwrNQk6rnAAsuQAAstE6rmQEwrOIpoqQIqoqLNkvQLnk7MtAAQMtAALnE7QLOEvIqIqQIqIqEvLOQE6LmABMtQgBMuk6LnQkvLNoqIqQoqIprOEwQrnE6stAAQstAArnk6g");
	this.shape_14.setTransform(168.7,37.8,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(2));

	// レイヤー 12
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1ED300").s().p("EgdIBFBQtdltqXqXQqYqYlstbQl4t8AAvOQAAvOF4t6QFstdKYqXQKXqYNdlsQN6l4POAAQPOAAN7F4QNdFsKXKYQKXKXFtNdQF4N6AAPOQAAPOl4N8QltNbqXKYQqXKXtdFtQt7F4vOAAQvOAAt6l4g");
	this.shape_15.setTransform(168.7,67.6,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76.3,-24.8,504.8,504.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;